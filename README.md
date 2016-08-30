# scss-demo 与 postcss的说明
**scss 与 sass的区别在于，sass是一种缩进的编写方式，而scss是正常的大括号的宽松方式，类似于css**

sass demo
### 相关文档如下： ###
[地址](http://www.w3cplus.com/sassguide/syntax.html)
### 注意的点
- 采用占位选择器去写一些公共的样式，这样可以避免重复出现两次多余的代码 eg:
```
%test{
    height:30px;
}
%test1{
    height:31px;
}
.test{
    @extend %test;
}
//解释之后
.test{
    height:30px;
}
//这里没有了%test1这个内容的解释编译内容。
```
- 采用继承的方式去继承公共的样式
```
h1{
    height:20px;
}
.test{
    @extend:h1;
}
```
- mixin
```
@mixin opacity($opacity:50,$bg-color:red) {
    opacity: $opacity / 100;
    background-color: $bg-color;
}
.test-mixin{
    @include opacity;
}
$bg-color:yellow;
//这里的yellow的颜色并没有覆盖掉opacity mixin的参数内容。
```

## postcss相关内容的配置 ##
### 什么是postcss？ ###
[文章地址](http://www.oschina.net/translate/its-time-for-everyone-to-learn-about-postcss)

postcss是一个处理css内容的工具，处理的方面包括，添加浏览器前缀，优化css写法，支持未来版本css的语法，支持雪碧图的生成，支持css的压缩等。

该工具很强大，但是需要对应的组件进行支持。
### 推荐的插件 ###
- Autoprefixer 添加浏览器前缀扩展名的。
- postcss-will-change 为浏览器的will-change属性添加backface-visibility属性，从而触发GPU处理器。
- postcss-color-rgba-fallback 为老版本浏览器添加支持background:rgba的支持。
- postcss-opacity 插件，为ie浏览器添加opacity的filter的写法。
- postcss-grid,Lost[项目地址](https://github.com/peterramsing/lost),postcss-neat 这3个插件都能让你的项目支持网格系统
