/*
 * @author: <%= htmlConf.author %>
 * @time: <%= htmlConf.date %>
*/
'use strict';

var <%= htmlConf.appName %>Module = (function (global) {
  // 一个简单的执行队列实现
  function Queue (queue) {
    this._queue = queue || [];
    this._delayTimer = null;
  }

  Queue.prototype.constructor = Queue;
  // 一次性执行整个队列
  Queue.prototype.queueAll = function (scope) {
    var self = this;
    var _q = self._queue;
    (function next() {
      if(_q.length > 0) {
        var obj = _q.shift();
        var f = obj.fn;
        var delay = obj.delay;
        self._delayTimer = setTimeout(function () {
          f.apply(scope || {}, [next].concat(Array.prototype.slice.call(arguments, 0)));
        }, delay);
      }
    })();
  };
  // 清空当前队列
  Queue.prototype.clearQueue = function () {
    this._queue = [];
    clearTimeout(this._delayTimer);
  };

  // 图片加载器
  function loadImages (resources, successCallback, errorCallback) {
    var images = {};
    var loadedImages = 0;
    var numImages = 0;
    var errorImages = 0;
    var CONST_INT_ONE = 1;

    for (var src in resources) {
      numImages++;
    }

    if (numImages === 0) {
      successCallback && successCallback(images);
      return;
    }

    for (var tsrc in resources) {
      images[tsrc] = new Image();
      images[tsrc].onload = function () {
        if (++loadedImages >= numImages) {
          successCallback && successCallback(images);
        }
      };

      images[tsrc].onerror = function () {
        if (++errorImages >= CONST_INT_ONE) {
          errorCallback && errorCallback();
        }
      };

      images[tsrc].src = resources[tsrc];
    }
  }

  // 执行单个元素的动画
  function playAnimate ($obj, animate, callback) {
    $obj
      .show()
      .removeClass(animate + ' animated')
      .addClass(animate + ' animated')
      .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass(animate + ' animated');
        callback && callback();
      });
  }

  function <%= htmlConf.appClassName %> (options) {
    this.conf = {};
    $.extend(this.conf, options);
    this.swiper = null;
    this.loaderProgress = null;

    this.init();
  }

  <%= htmlConf.appClassName %>.prototype = {
    constructor: <%= htmlConf.appClassName %>,

    // 初始化功能
    init: function () {
      this.getUsefulElements();
      this.initStyle();
      this.showLoaderProgress();
      // 加载图片资源
      loadImages(this.conf.resources, $.proxy(this.loadPage, this));
    },

    // 获取所有需要用到的元素
    getUsefulElements: function () {
      var $el = this.conf.$el;
      this.$elements = {
        $swiperContainer: $('.swiper-container', $el).hide(),
        $loader: $('.loader', $el),
        $progressText: $('.loader_progress', $el),
        $swiperPage: $('.swiper-page', $el)
      };
      this.$elements.$swiperPage.children().hide();
    },

    // 对页面进行等比缩放
    initStyle: function () {
      var $el = this.conf.$el;
      var width = $el.width();
      var height = $el.height();
      var ratio = 1;
      var widthR = width / 360;
      var heightR = height / 600;
      ratio = heightR > widthR ? widthR : heightR;
      if (ratio > 2) {
        ratio = 2;
      }
      this.ratio = ratio;
      this.$elements.$swiperPage.css('zoom', ratio);
    },

    // 加载页面
    loadPage: function (images) {
      this.hideLoaderProgress();
      playAnimate(this.$elements.$swiperContainer, 'fadeIn');
      this.initSwiper();
    },

    // 显示资源加载进度
    showLoaderProgress: function () {
      var initProgress = 3;
      var self = this;
      self.loaderProgress = setInterval(function () {
        initProgress += 25;
        self.$elements.$progressText.text(initProgress + '%');
        if (initProgress >= 77) {
          clearInterval(self.loaderProgress);
        }
      }, 400);
    },

    // 隐藏加载进度
    hideLoaderProgress: function () {
      var self = this;
      var $elements = self.$elements;
      setTimeout(function () {
        clearInterval(self.loaderProgress);
        $elements.$progressText.text('100%');
        $elements.$loader.addClass('scaleOut');
        setTimeout(function () {
          $elements.$loader.remove();
        }, 900);
      }, 300);
    },

    // 初始化swiper
    initSwiper: function () {
      var self = this;
      if (self.swiper) {
        return;
      }
      self.swiper = new Swiper('.swiper-container', {
        speed: 400,
        direction: 'vertical',
        effect: 'slide',
        swipeToNext: false,
        simulateTouch: true,
        mousewheelControl: true,
        onInit: function (swiper) {
          setTimeout(function () {
            self.playPageAnimate(1);
          }, 800);
        },

        onSlideChangeEnd: function (swiper) {
          self.hidePageElements(swiper.previousIndex + 1);
          self.playPageAnimate(swiper.activeIndex + 1);
        }
      });
    },

    // 执行单页动画
    playPageAnimate: function (page, context) {
      var animateQueueList = this.conf.animateQueueList;
      var pageAnimateList = [], animateListCopy = [];
      if (animateQueueList && animateQueueList.length > 0) {
        animateListCopy = animateQueueList[page - 1];
        pageAnimateList = animateListCopy.slice(0);
        this['page' + page + 'AnimateQueue'] = new Queue(pageAnimateList);
        this['page' + page + 'AnimateQueue'].queueAll();
      }
    },

    // 隐藏单页元素，同时清除动画队列
    hidePageElements: function (page, context) {
      var $elements = this.$elements;
      var pageElements = $($elements.$swiperPage[page - 1]).children();
      var animateQueue = this['page' + page + 'AnimateQueue'];
      if (animateQueue && ('clearQueue' in animateQueue)) {
        animateQueue.clearQueue();
      }
      pageElements.hide();
    }
  };
  return {
    <%= htmlConf.appClassName %>: <%= htmlConf.appClassName %>,
    playAnimate: playAnimate
  };
})(window, undefined);
