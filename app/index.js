'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
var wiredep = require('wiredep');
var _ = require('underscore.string');

module.exports = yeoman.generators.Base.extend({
  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);
    this.option('skip-install', {
      desc: 'Skips the installation of dependencies',
      type: Boolean
    });
  },
  initializing: function () {
    this.log(yosay(
      chalk.cyan('A HTML5 publicity page generator')
    ));
    this.log('need help? go and open issue: https://github.com/luckyadam/generator-html5/issues/new');
    this.htmlConf = {};
    this.pkg = require('../package.json');
  },
  prompting: function () {
    var done = this.async();
    var prompts = [{
      type: 'input',
      name: 'author',
      message: '雁过留声，人过留名~~',
      default: this.user.git.name() || process.env.USER,
      store: true
    }, {
      type: 'input',
      name: 'appName',
      message: '告诉我项目名称吧~',
      store: false,
      validate: function(input) {
        if (!input) {
          return '不能为空哦，会让人家很为难的~';
        }
        return true;
      }.bind(this)
    }, {
      type: 'list',
      name: 'needAnimateCss',
      message: '需要使用animate.css么，据说挺好用的哦~',
      store: false,
      choices: [{
        name: '恩，是不错，来一发吧~',
        value: true
      }, {
        name: '呵呵，我这么吊，还需要这种东西？',
        value: false
      }]
    }];

    this.prompt(prompts, function(anwsers) {
      this.htmlConf = anwsers;
      // console.log(anwsers);
      this.htmlConf.date = ((new Date()).getFullYear()) + '-' + ((new Date()).getMonth() + 1) + '-' + ((new Date()).getDate());
      this.htmlConf.appClassName = this._.classify(this.htmlConf.appName);
      this.htmlConf.appName = _.decapitalize(this.htmlConf.appClassName);
      done();
    }.bind(this));
  },
  writing: {
    config: function () {
      this.template('_package.json', 'package.json');
      this.template('_bower.json', 'bower.json');
      this.template('bowerrc', '.bowerrc');
      this.template('_gulp.js', 'gulpfile.js');
      this.template('editorconfig', '.editorconfig');
    },
    writeIndex: function () {
      this.indexFile = this.src.read('index.html');
      this.indexFile = this.engine(this.indexFile, this);

      this.indexFile = this.appendFiles({
        html: this.indexFile,
        fileType: 'js',
        optimizedPath: 'scripts/main.js',
        sourceFileList: ['scripts/base.js', 'scripts/index.js']
      });
      this.write('app/index.html', this.indexFile);
    },
    app: function () {
      // 创建目录
      this.mkdir('app');
      this.mkdir('app/scripts');
      this.mkdir('app/styles');
      this.mkdir('app/images');

      this.copy('base.js', 'app/scripts/base.js');
      this.copy('index.js', 'app/scripts/index.js');
      this.copy('style.css', 'app/styles/style.css');
      this.directory('images', 'app/images');
    }
  },
  install: function () {
    if (this.options['skip-install']) {
      return;
    }
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
    this.on('end', function () {
      var bowerJson = this.dest.readJSON('bower.json');
      // wire Bower packages to .html
      wiredep({
        bowerJson: bowerJson,
        directory: 'bower_components',
        exclude: [],
        ignorePath: /^(\.\.\/)*\.\./,
        src: 'app/index.html'
      });
    }.bind(this));
  }
});
