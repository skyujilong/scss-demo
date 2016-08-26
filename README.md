# scss-demo
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
