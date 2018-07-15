import F2 from './f2.js';
import {
  enable,
  WeexBridge
} from "gcanvas.js";

let F2Weex = Object.create(null)

F2Weex.install = (Vue, options) => {
  Vue.prototype.$createChart = function (ref, opt) {
    let gcanvasRef = enable(ref, {
      bridge: WeexBridge
    });
    let {
      width,
      height
    } = ref.style
    if (!width || !height) {
      throw new Error("请指定 GCanvas 的 width 和 height")
    }
    // weex 可以在获取到的组件引用 ref 上使用 addEvent api 监听事件，
    // 而 f2 传过来的 source 是经过 GCanvas 和 f2 加工过的 canvas 对象
    // 然而现在也只能支持 f2 tooltip 插件的手势，Interaction 和 Legend 上不支持
    // Interaction 是基于 hummer 的，这个又是基于浏览器的
    // 至于 Legend 上的点击事件不生效，不知道为啥嘞【尴尬】
    F2.Util.addEventListener = function (source, type, listener) {
      ref.addEvent(type, listener);
    };
    F2.Util.removeEventListener = function (source, type, listener) {
      ref.removeEvent(type);
    };
    Vue.prototype.$F2 = F2;
    let chart = new F2.Chart({
      el: gcanvasRef,
      width: width,
      height: height,
      ...opt
    });
    return chart
  }
}

Vue.use(F2Weex)