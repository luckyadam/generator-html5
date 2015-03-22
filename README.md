# HTML5 Slide Webapp Generator

> 这是一款面HTML5推广展示webapp的快速项目生成工具，让开发者只需关心页面本身的逻辑，并且只需要写很少的的代码，就能快速完成。

## 功能

* 专注于做HTML5展示页面的生成工具，能快速生成页面所需的框架代码，并且已经将页面切换，兼容不同分辨率展示等的逻辑封装起来了，让使用者只需关注每一页的动作（动画）执行序列的控制
* 通过[gulp](http://gulpjs.com)提供了文件编译、打包的功能
* 能方便地使用[bower](http://bower.io)安装各种插件，并且能在页面中自动生成bower包的依赖关系
* 提供了CSS Autoprefix

## 安装

首先需要通过如下命令安装[yeoman](http://yeoman.io/)和bower，推荐使用node版本管理工具[nvm](https://github.com/creationix/nvm)或[n](https://github.com/tj/n)，这样不仅可以很方便地切换node版本，而且安装时候也不用加``sudo``了。

```bash
[sudo] npm install -g yo bower
```

然后就可以安装本工具了

```bash
[sudo] npm install -g generator-html5
```

然后执行``yo html5``来生成你的项目，请根据提示一步一步来操作，不用担心，步骤非常少。

在所有文件生成完后你就可以通过 `` gulp serve`` 来预览你的项目了。

最后你可以通过``gulp``命令来编译和生成你的最终项目文件。

## 使用