window.onload = function(){
    home();
}

function Rem() {
    var docEl = document.documentElement,
        oSize = docEl.clientWidth / 7.5;

    if (oSize > 100) {
        oSize = 100; // 限制rem值 640 / 6.4 =100
    }
    docEl.style.fontSize = oSize + 'px';
}
window.addEventListener('resize', Rem, false);
Rem();

//audio
var audio1 = document.getElementById("audio1");
function audio1Play(){
    audio1.play();
}
function audio1Pause(){
    audio1.pause();
}

// homePage
function home(){
    $("#btn-start").click(function(){
        $(".homePage em:nth-child(3)").fadeIn();
        $(".homePage em:nth-child(4)").fadeIn();
        $("#btn-go").click(function(){
            $(".homePage em:nth-child(3)").hide();
            $(".homePage em:nth-child(4)").hide();
            $(".homePage").hide();
            page1();
            $("#audio1").attr("src","http://live.babyfs.cn/web/H5/common/audio/ready go.mp3");
            audio1Play();
        });
    });
}
// removeClass
function removeClass(){
    audio1Pause();
    $(".jigsaw img").removeClass("donut");
    $(".jigsaw img").removeClass("donut-front");
    $(".jigsaw li img:nth-child(1)").css("opacity",0);
    $(".page p:nth-child(4)").hide();
    $(".page h6:nth-child(5)").hide();
    $(".page h6:nth-child(6)").hide();
    $(".page em:nth-child(7)").hide();
    $(".jigsaw li").attr("dataNum",0);
    Index = 0;
}
// what's this
function question(){
    $("#audio1").attr("src","http://live.babyfs.cn/web/H5/ck/2017/audioZ/what's this.mp3");
    audio1Play();
}

var Index = 0;
// page1
function page1(){
    removeClass();
    $(".page1").show();
    $(".page1 em:nth-child(2)").click(function(){
        question();
    });
    $(".jigsaw1 li").click(function(){
        question();
        var dataNum = $(this).attr("dataNum");
        if(dataNum==0){
            Index++;
            $(this).attr("dataNum",1);
            $(this).find("img").css("opacity",1).addClass("donut");
            $(this).find("img:nth-child(2)").addClass("donut-front");

            if(Index==4){
                $("#audio1").attr("src","http://live.babyfs.cn/web/H5/common/audio/right2.mp3");
                audio1Play();
                setTimeout(function(){
                    $("#audio1").attr("src","http://live.babyfs.cn/web/H5/ck/2017/05/It's a brown bear.mp3");
                    audio1Play();
                    $(".page1 em:nth-child(7)").click(function(){
                        $("#audio1").attr("src","http://live.babyfs.cn/web/H5/ck/2017/05/It's a brown bear.mp3");
                        audio1Play();
                    });
                    $(".page1 p:nth-child(4)").fadeIn();
                    $(".page1 em:nth-child(7)").fadeIn();
                    $(".page1 h6:nth-child(5)").fadeIn();
                    $(".page1 h6:nth-child(6)").fadeIn();
                    $(".page1 h6:nth-child(5)").click(function(){
                        removeClass();
                        $(".page1").hide();
                        $(".homePage").show();
                    });
                    $(".page1 h6:nth-child(6)").click(function(){
                        removeClass();
                        $(".page1").hide();
                        page2();
                    });
                },2000);
            };
        }else{
            return false;
        };
    });
}
// page2
function page2(){
    removeClass();
    $(".page2").show();
    $(".page2 em:nth-child(2)").click(function(){
        question();
    });
    $(".jigsaw2 li").click(function(){
        question();
        var dataNum = $(this).attr("dataNum");
        if(dataNum==0){
            Index++;
            $(this).attr("dataNum",1);
            $(this).find("img").css("opacity",1).addClass("donut");
            $(this).find("img:nth-child(2)").addClass("donut-front");

            if(Index==4){
                $("#audio1").attr("src","http://live.babyfs.cn/web/H5/common/audio/right2.mp3");
                audio1Play();
                setTimeout(function(){
                    $("#audio1").attr("src","http://live.babyfs.cn/web/H5/ck/2017/05/It's a red bird.mp3");
                    audio1Play();
                    $(".page2 em:nth-child(7)").click(function(){
                        $("#audio1").attr("src","http://live.babyfs.cn/web/H5/ck/2017/05/It's a red bird.mp3");
                        audio1Play();
                    });
                    $(".page2 p:nth-child(4)").fadeIn();
                    $(".page2 em:nth-child(7)").fadeIn();
                    $(".page2 h6:nth-child(5)").fadeIn();
                    $(".page2 h6:nth-child(6)").fadeIn();
                    $(".page2 h6:nth-child(5)").click(function(){
                        removeClass();
                        $(".page2").hide();
                        page1();
                    });
                    $(".page2 h6:nth-child(6)").click(function(){
                        removeClass();
                        $(".page2").hide();
                        page3();
                    });
                },2000);
            };
        }else{
            return false;
        };
    });
}
// page3
function page3(){
    removeClass();
    $(".page3").show();
    $(".page3 em:nth-child(2)").click(function(){
        question();
    });
    $(".jigsaw3 li").click(function(){
        question();
        var dataNum = $(this).attr("dataNum");
        if(dataNum==0){
            Index++;
            $(this).attr("dataNum",1);
            $(this).find("img").css("opacity",1).addClass("donut");
            $(this).find("img:nth-child(2)").addClass("donut-front");

            if(Index==4){
                $("#audio1").attr("src","http://live.babyfs.cn/web/H5/common/audio/right2.mp3");
                audio1Play();
                setTimeout(function(){
                    $("#audio1").attr("src","http://live.babyfs.cn/web/H5/ck/2017/05/It's a yellow duck.mp3");
                    audio1Play();
                    $(".page3 em:nth-child(7)").click(function(){
                        $("#audio1").attr("src","http://live.babyfs.cn/web/H5/ck/2017/05/It's a yellow duck.mp3");
                        audio1Play();
                    });
                    $(".page3 p:nth-child(4)").fadeIn();
                    $(".page3 em:nth-child(7)").fadeIn();
                    $(".page3 h6:nth-child(5)").fadeIn();
                    $(".page3 h6:nth-child(6)").fadeIn();
                    $(".page3 h6:nth-child(5)").click(function(){
                        removeClass();
                        $(".page3").hide();
                        page2();
                    });
                    $(".page3 h6:nth-child(6)").click(function(){
                        removeClass();
                        $(".page3").hide();
                        page4();
                    });
                },2000);
            };
        }else{
            return false;
        };
    });
}
// page4
function page4(){
    removeClass();
    $(".page4").show();
    $(".page4 em:nth-child(2)").click(function(){
        question();
    });
    $(".jigsaw4 li").click(function(){
        question();
        var dataNum = $(this).attr("dataNum");
        if(dataNum==0){
            Index++;
            $(this).attr("dataNum",1);
            $(this).find("img").css("opacity",1).addClass("donut");
            $(this).find("img:nth-child(2)").addClass("donut-front");

            if(Index==4){
                $("#audio1").attr("src","http://live.babyfs.cn/web/H5/common/audio/right2.mp3");
                audio1Play();
                setTimeout(function(){
                    $("#audio1").attr("src","http://live.babyfs.cn/web/H5/ck/2017/05/It's a blue horse.mp3");
                    audio1Play();
                    $(".page4 em:nth-child(7)").click(function(){
                        $("#audio1").attr("src","http://live.babyfs.cn/web/H5/ck/2017/05/It's a blue horse.mp3");
                        audio1Play();
                    });
                    $(".page4 p:nth-child(4)").fadeIn();
                    $(".page4 em:nth-child(7)").fadeIn();
                    $(".page4 h6:nth-child(5)").fadeIn();
                    $(".page4 h6:nth-child(6)").fadeIn();
                    $(".page4 h6:nth-child(5)").click(function(){
                        removeClass();
                        $(".page4").hide();
                        page3();
                    });
                    $(".page4 h6:nth-child(6)").click(function(){
                        // $(".page4").hide();
                        $("#audio1").attr("src","http://live.babyfs.cn/web/H5/common/audio/finish.mp3");
                        audio1Play();
                        $(".clearance").show();
                    });
                },2000);
            };
        }else{
            return false;
        };
    });
}

