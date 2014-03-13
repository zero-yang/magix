/**
 * @fileOverview 对magix/view的扩展
 * @version 1.1
 * @author 行列
 */
define('mxext/view', ["magix/magix", "magix/view", "magix/router"], function(require) {
    var Magix = require("magix/magix");
    var View = require("magix/view");
    var Router = require("magix/router");

    var WIN = window;
var ResCounter = 0;
var SafeExec = Magix.safeExec;
var Has = Magix.has;
var EMPTYARR = [];

var RenderCallStr = 'rendercall';
var DestroyStr = 'destroy';

var DestroyTimer = function(id) {
    WIN.clearTimeout(id);
    WIN.clearInterval(id);
};

var Destroy = function(res) {
    SafeExec(res.destroy, EMPTYARR, res);
};

var DestroyAllManaged = function(e) {
    var me = this;
    var cache = me.$res;
    var onlyMR = e.type == RenderCallStr;
    var keepIt = e.type != DestroyStr;

    for (var p in cache) {
        var c = cache[p];
        if (!onlyMR || c.mr) {
            me.destroyManaged(p, keepIt);
        }
    }
};
var SyncInvoke = function(vf, method, args) {
    var result;
    if (vf.viewInited) {
        var view = vf.view;
        var fn = view[method];
        if (fn) {
            result = SafeExec(fn, args, view);
        }
    }
    return result;
};

var InvokeVframeView = function(view, id, wait, method, args, callback) {
    var result;
    var vom = view.vom;
    var vf = vom.get(id);
    if (wait) {
        var fn = function() {
            vf = vom.get(id);
            if (vf && vf.viewInited) {
                result = SyncInvoke(vf, method, args);
                if (callback) {
                    SafeExec(callback, result);
                }
            } else {
                fn.T = setTimeout(fn, 50);
            }
        };
        fn();
        result = view.manage({
            destroy: function() {
                DestroyTimer(fn.T);
            }
        });
    } else if (vf) {
        result = SyncInvoke(vf, method, args);
    }
    return result;
};

/**
 * 内置的view扩展，提供资源管理等
 * @name MxView
 * @namespace
 * @constructor
 * @augments View
 */
var MxView = View.extend({
    /**
     * @lends MxView#
     */
    /**
     * 调用magix/router的navigate方法
     * @function
     */
    navigate: Router.navigate,
    /**
     * 让view帮你管理资源，强烈建议对组件等进行托管
     * @param {String|Object} key 托管的资源或要共享的资源标识key
     * @param {Object} res 要托管的资源
     * @param {Boolean} [lastly] 是否在最终view销毁时才去销毁这个托管的资源，如果该参数为true时，可以调用destroyManaged来销毁这个资源
     * @return {Object} 返回传入的资源
     * @example
     * init:function(){
     *      this.manage('user_list',[//管理对象资源
     *          {id:1,name:'a'},
     *          {id:2,name:'b'}
     *      ],true);//仅在view销毁时才销毁这个托管的资源
     * },
     * render:function(){
     *      var _self=this;
     *      var m=new Model();
     *      m.load({
     *          success:function(resp){
     *              //TODO
     *              var brix=new BrixDropdownList();
     *
     *              _self.manage(brix);//管理组件
     *
     *              var pagination=_self.manage(new BrixPagination());//也可以这样
     *
     *              var timer=_self.manage(setTimeout(function(){
     *                  S.log('timer');
     *              },2000));//也可以管理定时器
     *
     *
     *              var userList=_self.getManaged('user_list');//通过key取托管的资源
     *
     *              S.log(userList);
     *          },
     *          error:function(msg){
     *              //TODO
     *          }
     *      });
     *
     *      _self.manage(m);
     * }
     */
    manage: function(key, res, lastly) {
        var me = this;
        var args = arguments;
        var hk = 1;

        var cache = me.$res;
        if (args.length == 1) {
            res = key;
            key = 'res_' + (ResCounter++);
            hk = 0;
        } else {
            var old = cache[key];
            if (old && old.res != res) { //销毁同key不同资源的旧资源
                me.destroyManaged(key); //
            }
        }
        var oust;
        if (Magix.isNumber(res)) {
            oust = DestroyTimer;
        } else if (res && res.destroy) {
            oust = Destroy;
        }
        var wrapObj = {
            hk: hk,
            res: res,
            ol: lastly,
            mr: res && res.fetchOne,
            oust: oust
        };
        cache[key] = wrapObj;
        return res;
    },
    /**
     * 获取托管的资源
     * @param {String} key 托管资源时传入的标识key
     * @param {Boolean} [remove] 获取后是否从缓存中移除
     * @return {Object}
     */
    getManaged: function(key, remove) {
        var me = this;
        var cache = me.$res;
        var res = null;
        if (Has(cache, key)) {
            var wrapObj = cache[key];
            res = wrapObj.res;
            if (remove) {
                delete cache[key];
            }
        }
        return res;
    },
    /**
     * 移除托管的资源
     * @param {String|Object} key 托管时标识key或托管的对象
     * @return {Object} 返回移除的资源
     */
    removeManaged: function(key) {
        return this.getManaged(key, 1);
    },
    /**
     * 销毁托管的资源
     * @function
     * @param {String} key manage时提供的资源的key
     * @param {Boolean} [keepIt] 销毁后是否依然在缓存中保留该资源的引用
     * @return {Object} 返回销毁的托管资源
     */
    destroyManaged: function(key, keepIt) {
        var me = this;
        var cache = me.$res;
        var o = cache[key];
        var res;
        if (o && (!keepIt || !o.ol) /*&& (!o.mr || o.sign != view.sign)*/ ) { //暂不考虑render中多次setViewHTML的情况
            //var processed=false;
            res = o.res;
            var oust = o.oust;
            var processed = false;
            if (oust) {
                oust(res);
                processed = true;
            }
            if (!o.hk || !keepIt) { //如果托管时没有给key值，则表示这是一个不会在其它方法内共享托管的资源，view刷新时可以删除掉
                delete cache[key];
            }
            me.fire('destroyManaged', {
                resource: res,
                processed: processed
            });
        }
        return res;
    },
    /**
     * 调用其它view的方法
     * @param  {String} vfId vframe的id
     * @param  {String} methodName view的方法名
     * @param {Array} args 参数
     * @return {Object}
     */
    invokeView: function(vfId, methodName, args) {
        return InvokeVframeView(this, vfId, 0, methodName, args);
    },
    /**
     * 以异步的方式调用其它view的方法，该方法会等待其它view的加载完成
     * @param  {String} vfId vframe的id
     * @param  {String} methodName view的方法名
     * @param  {Array} args 参数
     * @param  {Function} callback 用于接收调用完成后的返回值
     */
    invokeViewAsync: function(vfId, methodName, args, callback) {
        InvokeVframeView(this, vfId, 1, methodName, args, callback);
    }
}, function() {
    var me = this;
    me.$res = {};
    me.on('interact', function() {
        me.on(RenderCallStr, DestroyAllManaged);
        me.on('prerender', DestroyAllManaged);
        me.on(DestroyStr, DestroyAllManaged);
    });
    SafeExec(MxView.ms, arguments, me);
}, {
    ms: [],
    mixin: function(props, ctor) {
        if (ctor) MxView.ms.push(ctor);
        Magix.mix(MxView.prototype, props);
    }
});
/**
 * view销毁托管资源时发生
 * @name MxView#destroyResource
 * @event
 * @param {Object} e
 * @param {Object} e.resource 托管的资源
 * @param {Boolean} e.processed 表示view是否对这个资源做过销毁处理，目前view仅对带 abort destroy dispose方法的资源进行自动处理，其它资源需要您响应该事件自已处理
 */
    return MxView;
});