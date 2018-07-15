# F2-gcanvas-wrapper
 将 antv/f2 适配到 weex 和 GCanvas ，使用 weex 开发网页端的请自行判断 platform 。

 weex 可以在获取到的组件引用 ref 上使用 addEvent api 监听事件，而 f2 传过来的 source 是经过 GCanvas 和 f2 加工过的 canvas 对象,然而现在也只能支持 f2 tooltip 插件的手势，Interaction 和 Legend 上不支持,Interaction 是基于 hummer 的，这个又是基于浏览器的,至于 Legend 上的点击事件不生效，不知道为啥嘞【尴尬】
