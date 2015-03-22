/*
 * @author: <%= htmlConf.author %>
 * @time: <%= htmlConf.date %>
*/
'use strict';

;(function (global) {
  var conf = {
    $el: $('.container'),
    resources: {
      'sampleImage1': 'img/sample_img1.jpg',
      'sampleImage2': 'img/sample_img2.jpg'
    },
    animateQueueList: [
      // 第1页动画序列
      [
        {
          delay: 500,
          fn: function (callback) {
            <%= htmlConf.appName %>Module.playAnimate($('#sampleImage1'), 'fadeInLeft');
            callback();
          }
        },
        {
          delay: 500,
          fn: function () {
            <%= htmlConf.appName %>Module.playAnimate($('#sampleImage2'), 'bounceInUp');
          }
        }
      ],
      // 第二页动画序列
      [
        {
          delay: 500,
          fn: function (callback) {
            <%= htmlConf.appName %>Module.playAnimate($('#sampleImage3'), 'fadeInLeft');
            callback();
          }
        },
        {
          delay: 500,
          fn: function () {
            <%= htmlConf.appName %>Module.playAnimate($('#sampleImage4'), 'bounceInUp');
          }
        }
      ]
    ]
  };
  var <%= htmlConf.appName %>Page = new <%= htmlConf.appName %>Module.<%= htmlConf.appClassName %>(conf);
})(window, undefined);
