var aTop = document.documentElement.clientHeight;
var ohtml = document.documentElement;
var aWidth = ohtml.getBoundingClientRect().width;

$('.start').click(function () {
    document.getElementsByClassName('bigbox')[0].style.marginTop = -aTop / (aWidth / 16) + "rem";
})
$('.go').click(function () {
    document.getElementsByClassName('bigbox')[0].style.marginTop = -aTop * 2 / (aWidth / 16) + "rem";
    $('.run').show();
    $('.fox').removeClass('run_fox');

})

//再来一次
$("#onceMore").click(function(){
    window.location.href=window.location.href+"?id="+10000*Math.random();
})

//预加载
var num2 = 0;
var the_images = [
    "images/BtnLeft.png",
    "images/BtnRight.png",
    "images/chicken.png",
    "images/go.png",
    "images/rule.png",
    "images/run.png",
    "images/start.png",
    "images/homePage.png",
    "images/beforep2Page.png",
    "images/beforep3Page.png",
    "images/beforep4Page.png",
    "images/btn_onceMore.png",
    "images/BtnWenhao.png",
    "images/foxRight01.png",
    "images/foxRight02.png",
    "images/foxRight03.png",
    "images/foxRight04.png",
    "images/foxRight05.png",
    "images/koushui.png",
    "images/foxLeft01.png",
    "images/foxLeft02.png",
    "images/foxLeft03.png",
    "images/foxLeft04.png",
    "images/foxLeft05.png",
    "chicken1.png",
    "chicken2.png",
];
jQuery.imgpreload(the_images, {
    each: function () {
        var status = $(this).data('loaded') ? 'success' : 'error';
        if (status == "success") {
            ++num2;
            $("#lodingnum").html((num2 / the_images.length * 100).toFixed(0) + "%");
        }
    },
    all: function () {
        $("#lodingnum").html("100%");
        setTimeout(function () {
            document.getElementById('loading').style.display = "none";
            $(".p-index").css("display", "block");
        }, 300)
    }
})

var audio1 = document.getElementById('audio1');
function run() {
    $('.fox').addClass('run_fox')
    audio1.src = "audio/run.mp3";
    audio1.play()
    $('.run').hide();
    $('.chicken').addClass('run_chicken');
    $('.chicken').animate({right:'-60px',top:'30px'},5000,function () {
        $('.fox').animate({left:'500px',bottom:'800px'},3000,function () {
            $('.BtnLeft').show();
            $('.BtnRight').show();

        });
    });

}
//page01
function toP2() {
    document.getElementsByClassName('bigbox')[0].style.marginTop = -aTop *3/ (aWidth / 16) + "rem";
    setTimeout(function () {
        audio1.src = "audio/a7whathappenedtothefox.mp3";
        audio1.play()
        $('.page02fox').show();
        $('.page02dropfox').hide();
        $('.p1dialog1').css({"display":"block",});
        $('.dialog2').hide();
        $('.dialog3').hide();
        $('.page02fox').removeClass('run_fox');
        $('.page02fox').css({ "left":"-3.2rem","bottom":"12rem"})
    },1000)
}

function toHome() {
    setTimeout(function () {
        $(".chicken").css({"top":"50%","right":"50%"})
        $(".fox").css({"left":"-1.2rem","bottom":"4rem"})
        $('.chicken').removeClass('run_chicken');
    },1000)
    document.getElementsByClassName('bigbox')[0].style.marginTop = -aTop / (aWidth / 16) + "rem";
}

//page02

function drop() {
    $('.page02fox').hide();
    $('.dialog3').hide();
    $('.page02dropfox').show();
    $('.dialog1').hide();
    $('.dialog2').css({"display":"block"});
    audio1.src = "audio/S2the fox fell into the puddle.mp3";
    audio1.play();
   setTimeout(function () {
       $('.wenhao').show();
   },3000)
}
function goout() {
       $('.dialog3').show();
    $('.page02dropfox').hide();
    audio1.src = "audio/S3the fox went around the puddle.mp3";
    audio1.play();
    $('.page02fox').addClass('run_fox');
    $('.page02fox').fadeIn('slow',function () {
        $('.page02fox').animate({left:'-1.5rem'},1000,function () {
            $('.page02fox').animate({bottom:'6rem'},1500,function () {
                $('.page02fox').animate({left:'20rem'},2000);
            })
        })
    })
    setTimeout(function () {
        $('.wenhao').show();
    },3000)

}
function backP1() {
    $('.chicken').removeClass('run_chicken');
    $('.fox').removeClass('run_fox')
    $(".chicken").css({"top":"50%","right":"50%"})
    $(".fox").css({"left":"-1.2rem","bottom":"4rem"})
    $('.run').show();
    document.getElementsByClassName('bigbox')[0].style.marginTop = -aTop *2/ (aWidth / 16) + "rem";
}
function toP3() {
    document.getElementsByClassName('bigbox')[0].style.marginTop = -aTop *4/ (aWidth / 16) + "rem";
    setTimeout(function () {
        audio1.src = "audio/a7whathappenedtothefox.mp3";
        audio1.play()
        $('.page03fox').show();
        $('.gucangfox').hide();
        $('.dialog1').css({"display":"block"});
        $('.dialog3').hide();
        $('.dialog5').hide();
        $('.page02fox').removeClass('run_fox');
        $('.page02fox').css({ "left":"-3.2rem","bottom":"12rem"})
    },1000)
}
$('.P2BtnA').click(function () {
    $('.mock').css({"display":"block"});
    drop();
    setTimeout(function () {
        $('.page02fox').show();
        $('.page02fox').css({"left":"-3.2rem"});
        $('.page02fox').removeClass('run_fox');
        $('.dialog2').hide();
        $('p1dialog1').show();
        $('.page02dropfox').hide();
        $('.mock').css({"display":"none"});
    },3000)

})
$('.P2BtnB').click(function () {
    $('.mock').css({"display":"block"});
    goout();
    setTimeout(function () {
        $('.page02fox').show();
        $('.page02fox').css({"left":"-3.2rem","bottom":"12rem"});
        $('.page02fox').removeClass('run_fox');
        $('.dialog3').hide();
        $('.p1dialog1').show();
        $('.page02dropfox').hide();
        $('.mock').css({"display":"none"});
    },5000)
})



//page03

function gucang() {
    $('.page03fox').addClass('run_fox');
    $('.page03fox').hide();
    $('.dialog4').hide();
    $('.gucangfox').show();
    $('.dialog6').hide();
    $('.dialog5').css({"display":"block"});
    audio1.src = "audio/S4the fox was stuck.mp3";
    audio1.play();
    setTimeout(function () {
        $('.wenhao').show();
    },3000)
}
function leave() {
    $('.dialog5').hide();
    $('.dialog6').show();
    $('.gucangfox').hide();
    $('.page03fox').addClass('run_fox');
    audio1.src = "audio/S5the fox went past the bags of corn.mp3";
    audio1.play();
    $('.page03fox').fadeIn('slow',function () {
        $('.page03fox').animate({left:'-2rem'},function () {
            $('.page03fox').animate({bottom:'5rem'},function () {
                $('.page03fox').animate({left:'20rem'},2000);
            })
        })
    })
    setTimeout(function () {
        $('.wenhao').show();
    },3000)
}
function backP2() {
    setTimeout(function () {
        $(".page03fox").css({"left":"-3.2rem","bottom":"8rem"});
        $(".gucangfox").hide();
        audio1.src = "audio/a7whathappenedtothefox.mp3";
        audio1.play()
        $('.page02fox').show();
        $('.page02dropfox').hide();
        $('.dialog1').css({"display":"block","z-Index":"2"});
        $('.page02fox').removeClass('run_fox');
        $('.page03fox').removeClass('run_fox');
        $('.page02fox').css({ "left":"-3.2rem","bottom":"12rem"})

    },1000)
    document.getElementsByClassName('bigbox')[0].style.marginTop = -aTop *3/ (aWidth / 16) + "rem";
}
function toP4() {
    document.getElementsByClassName('bigbox')[0].style.marginTop = -aTop *5/ (aWidth / 16) + "rem";
    setTimeout(function () {
        audio1.src = "audio/a7whathappenedtothefox.mp3";
        audio1.play()
        $('.qiantui').show();
        $('.houtui').show();
        $('.page04fox').show();
        $('.fengfangfox').hide();
        $('.fengfang').show();
        $('.page04fox').removeClass('run_Left_fox');
        $('.dialog1').css({"display":"block","z-Index":"2"});
        $('.page04fox').removeClass('run_fox');
        $('.page04fox').css({ "right":"-4.7rem","top":"12rem"})
        $('.fengfangfox2').hide();
    },1000)
}
$('.P3BtnA').click(function () {
    $('.mock').css({"display":"block"});
    gucang();
    setTimeout(function () {
        $('.page03fox').show();
        $('.page03fox').css({"left":"-3.2rem"},{"bottom":"8rem"});
        $('.page03fox').removeClass('run_fox');
        $('.dialog5').hide();
        $('.dialog1').show();
        $('.gucangfox').hide();
        $('.mock').css({"display":"none"});
    },3000)

})
$('.P3BtnB').click(function () {
    $('.mock').css({"display":"block"});
    leave();
    setTimeout(function () {
        $('.page03fox').show();
        $('.page03fox').css({"left":"-3.2rem","bottom":"8rem"});
        $('.page03fox').removeClass('run_fox');
        $('.dialog6').hide();
        $('.dialog1').show();
        $('.gucangfox').hide();
        $('.mock').css({"display":"none"});
    },5000)
})

//page4

function fengfang() {
    $('.qiantui').hide();
    $('.houtui').hide();
    $('.page04fox').hide();
    $('.fengfang').hide();
    $('.dialog1').hide();
    $('.dialog8').hide();
    $('.fengfangwanzheng').show();
    $('.fengfangfox2').hide();
    $('.fengfangfox2').show().animate({"right":"-1.5rem"},700,function () {
        $('.fengfangwanzheng').hide();
        $('.fengfangfox').show();
    }).animate({"right":"-4.7rem"},700);
    $('.dialog7').css({"display":"block"});
    audio1.src = "audio/S6the fox bumped into the beehive.mp3";
    audio1.play();
    setTimeout(function () {
        $('.wenhao').show();
    },3000)
}
function leaveout() {
    $('.qiantui').show();
    $('.houtui').show();
    $('.page04fox').addClass('run_Left_fox');
    $('.dialog1').hide();
    $('.dialog7').hide();
    $('.dialog8').show();
    $('.fengfang').show();
    $('.fengfangfox').hide();
    audio1.src = "audio/S7the fox was under the beehive.mp3";
    audio1.play();
    $('.page04fox').fadeIn('slow',function () {
        $('.page04fox').animate({"right":"3.3rem","top":"50%"},1500).removeClass('run_Left_fox');
    })
    setTimeout(function () {
        $('.wenhao').show();
    },3000)
}
function backP3() {
    document.getElementsByClassName('bigbox')[0].style.marginTop = -aTop *4/ (aWidth / 16) + "rem";
    setTimeout(function () {
        $(".page03fox").css({"left":"-3.2rem","bottom":"8rem"});
        $(".gucangfox").hide();
        audio1.src = "audio/a7whathappenedtothefox.mp3";
        audio1.play()
        $('.page03fox').show();
        $('.dialog1').css({"display":"block"});
        $('.dialog5').hide();
        $('.dialog6').hide();
        $('.page02fox').removeClass('run_fox');
        $('.page03fox').removeClass('run_fox');
        $('.page03fox').css({ "left":"-3.2rem","bottom":"8rem"})

    },1000)
}

$('.P4BtnA').click(function () {
    $('.mock').css({"display":"block"});
    fengfang();
    setTimeout(function () {
        $('.fengfangfox2').hide();
        $('.page04fox').show();
        $('.fengfangwanzheng').show();
        $('.page04fox').css({"right":"-4.7rem"},{"bottom":"12rem"});
        $('.page04fox').removeClass('run_Left_fox');
        $('.dialog7').hide();
        $('.dialog1').show();
        $('.fengfangfox').hide();
        $('.qiantui').hide();
        $('.houtui').hide();
        $('.fengfang').hide()
        $('.mock').css({"display":"none"});
    },3000)

})
$('.P4BtnB').click(function () {
    $('.mock').css({"display":"block"});
    leaveout();
    setTimeout(function () {
        $('.fengfangfox2').hide();
        $('.page04fox').show();
        $('.page04fox').css({"right":"-4.7rem"},{"bottom":"12rem"});
        $('.fengfangwanzheng').show();
        $('.page04fox').removeClass('run_Left_fox');
        $('.dialog8').hide();
        $('.dialog1').show();
        $('.fengfangfox').hide();
        $('.qiantui').hide();
        $('.houtui').hide();
        $('.fengfang').hide()
        $('.fengfangfox').hide();
        $('.mock').css({"display":"none"});
    },4000)
})

function toEnd() {
    document.getElementsByClassName('bigbox')[0].style.marginTop = -aTop *6/ (aWidth / 16) + "rem";
    $('.smile').addClass("smiling-animate");
    $("#audio1").attr("src", "http://live.babyfs.cn/web/H5/common/audio/finish0.mp3");
    audio1.play();
}

$('.p1dialog1').click(function () {
    audio1.src = "audio/a7whathappenedtothefox.mp3";
    audio1.play()
})
$('.dialog1').click(function () {
    audio1.src = "audio/a7whathappenedtothefox.mp3";
    audio1.play()
})
$('.dialog2').click(function () {
    audio1.src = "audio/S2the fox fell into the puddle.mp3";
    audio1.play();
})
$('.dialog3').click(function () {
    audio1.src = "audio/S3the fox went around the puddle.mp3";
    audio1.play();
})
$('.dialog5').click(function () {
    audio1.src = "audio/S4the fox was stuck.mp3";
    audio1.play();
})
$('.dialog6').click(function () {
    audio1.src = "audio/S5the fox went past the bags of corn.mp3";
    audio1.play();
})
$('.dialog7').click(function () {
    audio1.src = "audio/S6the fox bumped into the beehive.mp3";
    audio1.play();
})
$('.dialog8').click(function () {
    audio1.src = "audio/S7the fox was under the beehive.mp3";
    audio1.play();
})