var aTop = document.documentElement.clientHeight;
var ohtml = document.documentElement;
var aWidth = ohtml.getBoundingClientRect().width;

$('.start').click(function () {
    document.getElementsByClassName('bigbox')[0].style.marginTop = -aTop / (aWidth / 16) + "rem";
})
$('.go').click(function () {
    document.getElementsByClassName('bigbox')[0].style.marginTop = -aTop * 2 / (aWidth / 16) + "rem";


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
    "images/fox.png",
    "images/go.png",
    "images/logo.png",
    "images/rule.png",
    "images/run.png",
    "images/start.png",
    "images/homePage.png"
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
    audio1.src = "audio/run.wav";
    audio1.play()
    $('.chicken').animate({right:'+3rem',top:'+5.5rem'},"slow",function () {
        $('.fox').animate({left:'+4rem',bottom:'+12rem'},"slow",function () {
            $('.BtnLeft').show();
            $('.BtnRight').show();
        });
    });

}
//page01
function toP2() {
    document.getElementsByClassName('bigbox')[0].style.marginTop = -aTop *3/ (aWidth / 16) + "rem";
    setTimeout(function () {
        audio1.src = "audio/S1whats gonna happen.wav";
        audio1.play()
        // $('.page02 .p1dialog1').show();
        // $('.page02dropfox').hide();
        // $('.page02fox').css({"left":"-3.2rem","bottom":"12rem"});
    },1000)
}

function toHome() {
    setTimeout(function () {
        $(".chicken").css({"top":"50%","right":"50%"})
        $(".fox").css({"left":"-1.2rem","bottom":"4rem"})
    },1000)
    document.getElementsByClassName('bigbox')[0].style.marginTop = -aTop / (aWidth / 16) + "rem";
}

//page02
function wenhao() {
    var random = Math.floor(Math.random()*2)
    if(random==0){
        drop()
    }else if(random==1){
        $('.page02fox').css({"left":"-3.2rem","bottom":"12rem"});
        goout();
    }
}
function drop() {
    $('.page02fox').hide();
    $('.dialog3').hide();
    $('.page02dropfox').show();
    $('.dialog1').hide();
    $('.dialog2').css({"display":"block"});
    audio1.src = "audio/S2the fox fell into the puddle.wav";
    audio1.play();
}
function goout() {
       $('.dialog3').show();
    $('.page02dropfox').hide();
    audio1.src = "audio/S3the fox went around the puddle.wav";
    audio1.play();
    $('.page02fox').fadeIn('slow',function () {
        $('.page02fox').animate({left:'1rem'},function () {
            $('.page02fox').animate({bottom:'6rem'},function () {
                $('.page02fox').animate({left:'20rem'},2000);
            })
        })
    })
}
function backP1() {
    $(".chicken").css({"top":"50%","right":"50%"})
    $(".fox").css({"left":"-1.2rem","bottom":"4rem"})
    document.getElementsByClassName('bigbox')[0].style.marginTop = -aTop *2/ (aWidth / 16) + "rem";
}
function toP3() {
    document.getElementsByClassName('bigbox')[0].style.marginTop = -aTop *4/ (aWidth / 16) + "rem";
    setTimeout(function () {
        audio1.src = "audio/S1whats gonna happen.wav";
        audio1.play()
    },1000)
}

//page03
function p3wenhao() {
    var random = Math.floor(Math.random()*2)
    if(random==0){
        gucang()
    }else if(random==1){
        $('.page03fox').css({"left":"-3.2rem","bottom":"8rem"});
        leave();
    }
}
function gucang() {
    $('.page03fox').hide();
    $('.dialog4').hide();
    $('.gucangfox').show();
    $('.dialog6').hide();
    $('.dialog5').css({"display":"block"});
    audio1.src = "audio/S4the fox was stuck.wav";
    audio1.play();
}
function leave() {
    $('.dialog5').hide();
    $('.dialog6').show();
    $('.gucangfox').hide();
    audio1.src = "audio/S3the fox went around the puddle.wav";
    audio1.play();
    $('.page03fox').fadeIn('slow',function () {
        $('.page03fox').animate({left:'-2rem'},function () {
            $('.page03fox').animate({bottom:'5rem'},function () {
                $('.page03fox').animate({left:'20rem'},2000);
            })
        })
    })
}
function toP22() {
    setTimeout(function () {
        $(".page03fox").css({"left":"-3.2rem","bottom":"8rem"});
        $(".gucangfox").hide();
    },1000)
    document.getElementsByClassName('bigbox')[0].style.marginTop = -aTop *3/ (aWidth / 16) + "rem";
}
function toP4() {
    document.getElementsByClassName('bigbox')[0].style.marginTop = -aTop *5/ (aWidth / 16) + "rem";
    setTimeout(function () {
        audio1.src = "audio/S1whats gonna happen.wav";
        audio1.play()
    },1000)
}

//page4
function p4wenhao() {
    var random = Math.floor(Math.random()*2)
    if(random==0){
        fengfang()
    }else if(random==1){
        $('.page04fox').css({"right":"-4.7rem","top":"12rem"});
        leaveout();
    }
}

function fengfang() {
    $('.page04fox').hide();
    $('.fengfang').hide();
    $('.page04 .dialog1').hide();
    $('.dialog8').hide();
    $('.fengfangfox').show();
    $('.dialog7').css({"display":"block"});
    audio1.src = "audio/S6the fox bumped into the beehive.wav";
    audio1.play();
}
function leaveout() {
    $('.dialog7').hide();
    $('.dialog8').show();
    $('.fengfang').show();
    $('.fengfangfox').hide();
    audio1.src = "audio/S7the fox was under the beehive.wav";
    audio1.play();
    $('.page04fox').fadeIn('slow',function () {
        $('.page04fox').animate({"right":"16rem","top":"15rem"},'2000')
    })
}
function backP3() {
    document.getElementsByClassName('bigbox')[0].style.marginTop = -aTop *4/ (aWidth / 16) + "rem";
}
function toEnd() {
    document.getElementsByClassName('bigbox')[0].style.marginTop = -aTop *6/ (aWidth / 16) + "rem";
}