# HTML5 Slide Webapp Generator
[![npm version](https://badge.fury.io/js/generator-html5.svg)](http://badge.fury.io/js/generator-html5)
[![Code Climate](https://codeclimate.com/repos/551b917869568059920055ed/badges/1030e812cad3c61e4936/gpa.svg)](https://codeclimate.com/repos/551b917869568059920055ed/feed)
> 这是一款面HTML5推广展示webapp的快速项目生成工具，让开发者只需关心页面本身的逻辑，并且只需要写很少的的代码，就能快速完成。

## 功能

* 专注于做HTML5展示页面的生成工具，能快速生成页面所需的框架代码，并且已经将页面切换，兼容不同分辨率展示等的逻辑封装起来了，让使用者只需关注每一页的动作（动画）执行序列的控制
* 提供了CSS Autoprefix
* 图片压缩
* 通过[gulp](http://gulpjs.com)提供了文件编译、打包的功能
* 能方便地使用[bower](http://bower.io)安装各种插件，并且能在页面中自动生成bower包的依赖关系

## Demo Page

generator-html5运行后的示例页面 [http://luckyadam.github.io/generator-html5/](http://luckyadam.github.io/generator-html5/) 

## 安装

首先需要通过如下命令安装[yeoman](http://yeoman.io/)和bower，推荐使用node版本管理工具[nvm](https://github.com/creationix/nvm)或[n](https://github.com/tj/n)，这样不仅可以很方便地切换node版本，而且全局安装时候也不用加``sudo``了。

```bash
[sudo] npm install -g yo bower
```

然后就可以安装本工具了

```bash
[sudo] npm install -g generator-html5
```

## 快速开始

在安装完成后，执行``yo html5``来生成你的项目，请根据提示一步一步来操作，不用担心，步骤非常少。

在所有文件都生成完后，会默认执行``npm install && bower install``来安装项目依赖的插件，由于依赖的插件较丰富，这一步会耗时比较长，请耐心等待一会儿。

依赖安装完后你就可以通过执行``gulp serve``来预览示例页面了，脚手架工具默认给出了2页的示例，并给出了4张示例图片的展示，你可以通过滑动或滚动鼠标切换展示。

然后我们来开始开发，在开发前需要重点关注这几个文件：

* ``app/index.html``
* ``app/styles/style.css``是页面所有样式的所在
* ``app/scripts/base.js``中是页面的核心逻辑，里面包括了一些基础工具方法的定义，页面滑动组件[swiper.js](http://www.idangero.us/swiper/)的初始化，对于较简单的需求这个文件一般不太需要修改
* ``app/scripts/index.js``供开发人员自己的定制，可以定义想要进行预加载的图片，设置每一页的动做序列

目前脚手架工具已经给出示例代码，你可以参照示例代码，按照如下步骤来开发你的项目：

* 在``app/index.html``中添加你自己的元素或者是增加页数
* 然后再``app/styles/style.css``中对元素进行布局，建议对所有元素使用**绝对布局**，本项目最佳UE图尺寸为720*1280，同时为了适配小屏幕手机，页面下部要适当留白，图片取出直接二倍缩放使用，并可以直接使用像素为单位进行布局
* 最后在``app/scripts/index.js``中根据范例完善你自己的动作序列

一般情况下，只需要修改以上三个文件即可满足需求，而不需要修改``app/scripts/base.js``。


最后你可以通过``gulp``命令来编译和生成你的最终项目文件。


## 项目结构

* ``app``目录下是源代码，你将在这里进行开发
* ``bower_components``是``bower``插件安装的目录，你可以通过修改``.bowerrc``文件来修改安装目录
* ``dist``通过``gulp``编译后的代码生成目录

## 项目依赖

本项目的开发完善离不开大量优秀的开源项目的支持！

### 构建工具
* [yeoman](http://yeoman.io/)振奋人心的脚手架生成工具
* [bower](http://bower.io)优秀的包管理工具
* [gulp](http://gulpjs.com)下一代前端构建工具

### 前端库
* [Zepto.js](http://zeptojs.com/)轻量级类jQuery库
* [swiper.js](http://www.idangero.us/swiper/)炒鸡棒的滑动库
* [animate.css](http://daneden.github.io/animate.css/)CSS3小动画库

## FAQ

