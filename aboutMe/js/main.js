
/////////////////////菜单游标效果//////////////////
// 获取元素
function getCur() {
  var curElem = $('#nav').find('.cur').size() > 0 ? $('#nav').find('.cur') : 0, //获取cur样式元素
    parentLeft = $('#nav ul').offset().left, //父元素的X值
    curLeft = curElem ? curElem.offset().left - parentLeft : 0, //cur元素实际left值
    curWidth = curElem ? curElem.width() : 0; //cur元素的宽

  return {
    curElem: curElem, parentLeft: parentLeft, curLeft: curLeft, curWidth: curWidth,
  };
}

//鼠标指向样式样式
$(function thisBar() {

  $('#nav a').on('mouseenter', function () {
    var thisparent = $(this).parent().parent().offset().left,
      thisLeft = $(this).offset().left - thisparent,
      thisWidth = $(this).width();

    // console.log('当前元素的X：'+$(this).offset().left);
    // console.log('父元素的X：'+parentLeft);

    $('.cur-bar').stop().animate({
      left: thisLeft,
      width: thisWidth,
      opacity: 1
    }, 600);
  });

  $('#nav').mouseleave(function () {
    $('.cur-bar').stop().animate({
      left: getCur().curLeft,
      width: getCur().curWidth,
      opacity: 1
    }, 500);
  });
});

//换屏切换效果
function switchCur() {
  $('.cur-bar').animate({
    left: getCur().curLeft,
    width: getCur().curWidth,
    opacity: 1
  }, 300);
}

/////////////// section动画部分//////////////////

//section1 动画
$flag1 = true;
function section1() {
  if ($flag1) {
    move('.line-top').duration('.8s').set('left', 0).set('opacity', 1).end();
    move('.line-bottom').duration('.8s').set('left', 0).set('opacity', 1).end(
      function () {
        move('#first').duration('.6s').set('opacity', 1).end(function () {
          move('#second').set('opacity', 1).duration('.6s').end(function () {
            move('#third').set('opacity', 1).duration('1s').end(function () {
              move('.line-top').set('left', '-500px').set('opacity', 0).end();
              move('.line-bottom').set('left', '510px').set('opacity', 0).end();
              move('.line-top2').set('left', '-1px').set('opacity', 1).duration('.4s').end();
              move('.line-bottom2').set('left', '-1px').set('opacity', 1).duration('.4s').end();
              move('.line-left2').set('top', '-1px').set('opacity', 1).duration('.4s').end();
              move('.line-right2').set('top', '-1px').set('opacity', 1).duration('.4s').end();
              move('.look').set('opacity', '1').duration('.8s').set('visibility', 'visible').end(function () {
                $flag1 = false;
              });
            });
          });
        });
      }
    );
  } else {
    return false;
  }
}

//section2 动画
function section2() {
  move('.avatar').set('visibility', 'visible').scale(1).end(function () {
    // $('.avatar').addClass('shake');
    move('.self-info p').set('visibility', 'visible').set('opacity', 1).set('left', '0px').end(function () {
      move('.education h1').set('visibility', 'visible').scale(1).end(function () {
        move('.high-school div').set('left', '0px').set('opacity', '1').end(function () {
          move('#check1').set('opacity', '1').scale(1).end(function () {
            move('.lb').set('height', '60px').end(function () {
              move('#check2').set('opacity', '1').scale(1).end(function () {
                move('.college div').set('left', '0px').set('opacity', '1').end(function () {
                  move('.basic-info').set('opacity', 1).duration('1s').end();
                });
              });
            });
          });
        });
      });
    });
  });
};

//section3 动画
var js = 82,
  react = 80,
  node = 62,
  vue = 70,
  angular = 65,
  web = 76,
  git = 66,
  webpack = 68,
  speed = 0,
  i = 0,
  k = 12,
  speed = 1,
  timer = null;

function section3() {
  move('.title-content').set('top', '0').set('opacity', 1).duration('1.5s').end()
  move('.skill-circle').set('top', '0').set('opacity', 1).duration('1s').end(function () {
    timer = setInterval('addPercent()', 20);
  });
}

//技能旋转效果
function rotate() {
  $('.circle').each(function () {
    var num = $(this).find('.percent').text() * 3.6;
    if (num <= 180) {
      $(this).find('.left-p').css('transform', "rotate(" + (180 - num) + "deg)");
    } else {
      $(this).find('.left-p').css('transform', "rotate(0deg)");
      $(this).find('.right-p').css('transform', "rotate(" + (360 - num) + "deg)");
    }
  });

}

//增加百分比
function addPercent() {
  var $js = $('.js').find('.percent').text(),
    $react = $('.react').find('.percent').text(),
    $node = $('.node').find('.percent').text(),
    $vue = $('.vue').find('.percent').text(),
    $angular = $('.angular').find('.percent').text(),
    $web = $('.web').find('.percent').text(),
    $git = $('.git').find('.percent').text(),
    $webpack = $('.webpack').find('.percent').text();

  if ($js === js) {
    clearInterval(timer);
  } else {
    if ($react == react) {
      $('.react').find('.percent').text(react);
    } else {
      $('.react').find('.percent').text(i);
    }
    if ($node == node) {
      $('.node').find('.percent').text(node);
    } else {
      $('.node').find('.percent').text(i);
    }
    if ($vue == vue) {
      $('.vue').find('.percent').text(vue);
    } else {
      $('.vue').find('.percent').text(i);
    }
    if ($angular == angular) {
      $('.angular').find('.percent').text(angular);
    } else {
      $('.angular').find('.percent').text(Math.floor((angular - $angular) / k) + i);
    }
    if ($web == web) {
      $('.web').find('.percent').text(web);
    } else {
      $('.web').find('.percent').text(Math.floor((web - $web) / k) + i);
    }
    if ($git == git) {
      $('.git').find('.percent').text(git);
    } else {
      $('.git').find('.percent').text(Math.floor((git - $git) / k) + i);
    }
    if ($webpack == webpack) {
      $('.webpack').find('.percent').text(webpack);
    } else {
      $('.webpack').find('.percent').text(i);
    }
    if ($js == js) {
      $('.js').find('.percent').text(js);
    } else {
      $('.js').find('.percent').text(Math.floor((js - $js) / k) + i);
    }
    i += 1;
    rotate();
  }
}

//section4动画
function section4() {
  move('.num1 .simboo').scale(1).end(function () {
    $('.num1 .progress-content').animate({
      'opacity': 1
    }, 700).addClass('move-left');
  });
  move('.num2 .simboo').scale(1).end(function () {
    $('.num2 .progress-content').animate({
      'opacity': 1
    }, 700).addClass('move-right');
  });
  move('.num3 .simboo').scale(1).end(function () {
    $('.num3 .progress-content').animate({
      'opacity': 1
    }, 700).addClass('move-left');
  });
}

//section5动画
function section5() {
  move('.my-blog .content-box').set('transform', 'rotateY(0deg)').set('opacity', 1).duration('1.3s').end();
  move('.my-github .content-box').set('transform', 'rotateY(0deg)').set('opacity', 1).duration('1.6s').end();
  move('.my-course-blog .content-box').set('transform', 'rotateY(0deg)').set('opacity', 1).duration('1.9s').end();
  move('.my-course-vue-mail .content-box').set('transform', 'rotateY(0deg)').set('opacity', 1).duration('2.1s').end();
  move('.my-course-admin .content-box').set('transform', 'rotateY(0deg)').set('opacity', 1).duration('2.3s').end();
  move('.my-course-mail .content-box').set('transform', 'rotateY(0deg)').set('opacity', 1).duration('2.5s').end();
  move('.my-course-erp .content-box').set('transform', 'rotateY(0deg)').set('opacity', 1).duration('2.7s').end();
}

//section6动画
function section6() {
  move('.letter').set('top', '0').duration('1.5s').end(function () {
    move('.stamp').set('opacity', 1).duration(0).end();
    move('.hand').set('opacity', 1).duration(0).end(function () {
      move('.stamp').set('right', '60px').duration('1s').end(function () {
        $('.stamp').addClass('shake');
      });
      move('.hand').set('right', '-360px').duration('1s').end(function () {
        move('.hand').set('right', '-1000px').duration('3s').end(function () {
          move('.hand').set('opacity', 0).set();
        });
      });
    });
  });
}

$(document).ready(function () {
  //section 1 加载完毕loading隐藏
  $('.loading').fadeOut(500);

  //section 2 初始化
  move('.avatar').set('visibility', 'hidden').scale(0).end();
  move('.self-info p').set('visibility', 'hidden').set('opacity', 0).set('left', '-100px').end();
  move('.self-info p').set('visibility', 'hidden').set('opacity', 0).set('left', '-100px').end();
  move('.basic-info').set('opacity', 0).end();
  move('.education h1').set('visibility', 'hidden').scale(0).end();
  move('.high-school div').set('left', '-50px').set('opacity', '0').end();
  move('.college div').set('left', '-50px').set('opacity', '0').end();
  move('#check1').set('opacity', '0').scale(0).end();
  move('#check2').set('opacity', '0').scale(0).end();
  move('.lb').set('height', '0').end();
  move('.lt').set('height', '0').end();

  //section 3 初始化
  move('.title-content').set('top', '-10%').set('opacity', 0).end();
  move('.skill-circle').set('top', '10%').set('opacity', 0).end();

  //section 4 初始化
  move('.num1 .progress-content').set('opacity', 0).end();
  move('.num2 .progress-content').set('opacity', 0).end();
  move('.num3 .progress-content').set('opacity', 0).end();
  move('.num1 .simboo').scale(0).end();
  move('.num2 .simboo').scale(0).end();
  move('.num3 .simboo').scale(0).end();

  //section5动画初始化
  move('.my-blog .content-box').set('transform', 'rotateY(270deg)').set('opacity', 0).end();
  move('.my-github .content-box').set('transform', 'rotateY(270deg)').set('opacity', 0).end();
  move('.my-course-vue-mail .content-box').set('transform', 'rotateY(270deg)').set('opacity', 0).end();
  move('.my-course-blog .content-box').set('transform', 'rotateY(270deg)').set('opacity', 0).end();
  move('.my-course-admin .content-box').set('transform', 'rotateY(270deg)').set('opacity', 0).end();
  move('.my-course-mail .content-box').set('transform', 'rotateY(270deg)').set('opacity', 0).end();
  move('.my-course-erp .content-box').set('transform', 'rotateY(270deg)').set('opacity', 0).end();

  //section6动画初始化
  move('.stamp').set('right', '-290px').set('opacity', 0).end();
  move('.hand').set('right', '-714px').set('opacity', 0).end();
  move('.letter').set('top', '400px').end();

  //fullpage初始化配置
  $('#fullpage').fullpage({
    navigation: true,
    anchors: ['welcome', 'aboutme', 'skill', 'internship', 'artworks', 'contact'],
    // sectionsColor : ['#000', 'orange', 'grey', 'green', 'pink', 'blue', 'purple'],
    navigationPosition: 'right',
    navigationTooltips: ['欢迎界面', '关于我', '专业技能', '实习经历', '个人作品', '联系方式'],
    // showActiveTooltip: true,
    resize: false,
    fixedElements: '#nav',
    menu: '#nav',
    scrollBar: false,
    fitToSection: true,
    scrollOverflow: true,
    afterLoad: function (anchorLink, index) {
      // console.log(anchorLink, index);
      switch (index) {
        case 1:
          $('#nav').removeClass('min');
          $('#nav li a').removeClass('cur');
          $('#nav li').find('.page1').addClass('cur');
          switchCur();
          section1();
          break;
        case 2:
          section2();
          break;
        case 3:
          section3();
          break;
        case 4:
          section4();
          break;
        case 5:
          section5();
          break;
        case 6:
          section6();
          break;
      }
    },
    onLeave: function (index, nextIndex, direction) {
      // console.log(index,nextIndex,direction);
      switch (nextIndex) {
        case 1:
          $('#nav').removeClass('min');
          $('#nav li a').removeClass('cur');
          $('#nav li').find('.page1').addClass('cur');
          switchCur();
          break;
        case 2:
          $('#nav').addClass('min');
          $('#nav li a').removeClass('cur');
          $('#nav li').find('.page2').addClass('cur');
          switchCur();
          break;
        case 3:
          $('#nav').addClass('min');
          $('#nav li a').removeClass('cur');
          $('#nav li').find('.page3').addClass('cur');
          switchCur();
          break;
        case 4:
          $('#nav').addClass('min');
          $('#nav li a').removeClass('cur');
          $('#nav li').find('.page4').addClass('cur');
          switchCur();
          break;
        case 5:
          $('#nav').addClass('min');
          $('#nav li a').removeClass('cur');
          $('#nav li').find('.page5').addClass('cur');
          switchCur();
          break;
        case 6:
          $('#nav').addClass('min');
          $('#nav li a').removeClass('cur');
          $('#nav li').find('.page6').addClass('cur');
          switchCur();
          break;
      }
    },
  });

  //particles插件初始化
  particlesJS('particles-js',
    {
      "particles": {
        "number": {
          "value": 60,
          "density": {
            "enable": true,
            "value_area": 2000
          }
        },
        "color": {
          "value": "#ccc"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 6
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 12,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 350,
          "color": "#e8e8e8",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 1,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "repulse"
          },
          "onclick": {
            "enable": false,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 250,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true,
      "config_demo": {
        "hide_card": false,
        "background_color": "#b61924",
        "background_image": "",
        "background_position": "50% 50%",
        "background_repeat": "no-repeat",
        "background_size": "cover"
      }
    }
  );
  console.log('听说您在前端寻找一匹千里马？');
  console.log("这是他的邮箱:%c weihome_chen@163.com", "color:red");
  console.log("要不打个电话试试:%c 173-1694-9401", "color:red");
});
