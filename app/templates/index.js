/*
 * @author: <%= htmlConf.author %>
 * @time: <%= htmlConf.date %>
*/
'use strict';

;(function (global) {
  var conf = {
    $el: $('.container'),
    // 图片资源，可以选择性添加要预先加载的图片资源，动画序列会在这些资源加载完成后开始执行
    resources: {
      'sampleImg1': 'images/sample_img1.jpg',
      'sampleImg2': 'images/sample_img2.jpg',
      'sampleImg3': 'images/sample_img3.jpg',
      'sampleImg4': 'images/sample_img4.jpg'
    },
    // 分页动画执行序列，但不仅仅限于动画
    animateQueueList: [
      // 第1页动画序列
      [
        {
          delay: 500,
          fn: function (callback) {
            <%= htmlConf.appName %>Module.playAnimate($('#sample_img1'), 'fadeInLeft');
            callback();
          }
        },
        {
          delay: 500,
          fn: function () {
            <%= htmlConf.appName %>Module.playAnimate($('#sample_img2'), 'bounceInUp');
          }
        }
      ],
      // 第二页动画序列
      [
        {
          delay: 500,
          fn: function (callback) {
            <%= htmlConf.appName %>Module.playAnimate($('#sample_img3'), 'zoomInRight');
            callback();
          }
        },
        {
          delay: 500,
          fn: function () {
            <%= htmlConf.appName %>Module.playAnimate($('#sample_img4'), 'bounceInUp');
          }
        }
      ]
    ]
  };
  var <%= htmlConf.appName %>Page = new <%= htmlConf.appName %>Module.<%= htmlConf.appClassName %>(conf);
})(window, undefined);
