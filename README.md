# HTML5 Slide Webapp Generator
[![npm version](https://badge.fury.io/js/generator-html5.svg)](http://badge.fury.io/js/generator-html5)
> 这是一款面HTML5推广展示webapp的快速项目生成工具，让开发者只需关心页面本身的逻辑，并且只需要写很少的的代码，就能快速完成。

## 功能

* 专注于做HTML5展示页面的生成工具，能快速生成页面所需的框架代码，并且已经将页面切换，兼容不同分辨率展示等的逻辑封装起来了，让使用者只需关注每一页的动作（动画）执行序列的控制
* 提供了CSS Autoprefix
* 图片压缩
* 通过[gulp](http://gulpjs.com)提供了文件编译、打包的功能
* 能方便地使用[bower](http://bower.io)安装各种插件，并且能在页面中自动生成bower包的依赖关系

## 安装

首先需要通过如下命令安装[yeoman](http://yeoman.io/)和bower，推荐使用node版本管理工具[nvm](https://github.com/creationix/nvm)或[n](https://github.com/tj/n)，这样不仅可以很方便地切换node版本，而且全局安装时候也不用加``sudo``了。

```bash
[sudo] npm install -g yo bower
```

然后就可以安装本工具了

```bash
[sudo] npm install -g generator-html5
```

## 使用

在安装完成后，执行``yo html5``来生成你的项目，请根据提示一步一步来操作，不用担心，步骤非常少。

在所有文件都生成完后，会默认执行``npm install && bower install``来安装项目依赖的插件，由于依赖的插件较丰富，这一步会耗时比较长，请耐心等待一会儿。

依赖安装完后你就可以通过执行``gulp serve``来预览你的项目了，脚手架工具默认给出了2页的示例，并给出了4张示例图片的展示，你可以通过滑动或滚动鼠标切换展示。

然后我们来开始开发，脚手架工具已经给出示例代码，你可以参照示例代码，按照如下步骤来开发你的项目：

* 在``app/index.html``中添加你自己的元素或者是增加页数
* 然后再``app/styles/style.css``中对元素进行布局，建议对所有元素使用**绝对布局**，本项目最佳UE图尺寸为720*1280，同时为了适配小屏幕手机，页面下部要适当留白，图片取出直接二倍缩放使用，并可以直接使用像素为单位进行布局
* 最后在``app/scripts/index.js``中根据范例完善你自己的动作序列

一般情况下，只需要修改以上三个文件即可满足需求，而不需要修改``app/scripts/base.js``。


最后你可以通过``gulp``命令来编译和生成你的最终项目文件。


## 项目结构

## FAQ

