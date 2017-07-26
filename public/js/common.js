        //拖拽函数
        function drag(obj,obj1,parent,success){
                    obj.addEventListener("touchstart", function(e) {
                              obj.style.zIndex=izIndex++;           
                              var touches=e.touches[0];
                              window.disX=touches.clientX-obj.offsetLeft;
                              window.disY=touches.clientY-obj.offsetTop;
                              document.addEventListener("touchmove",defaultEvent,false);
                    },false)
                    obj.addEventListener("touchmove", function(e){
                                var touches=e.touches[0];
                                var oLeft=touches.clientX-disX;
                                var oTop=touches.clientY-disY;
                                if(oLeft<0) {
                                    oLeft=0;
                                }else if(oLeft>parent.offsetWidth-obj.offsetWidth){
                                    oLeft=(parent.offsetWidth-obj.offsetWidth);
                                }
                                if(oTop<0) {
                                    oTop=0;
                                }else if(oTop>parent.offsetHeight-obj.offsetHeight){
                                    oTop=(parent.offsetHeight-obj.offsetHeight);
                                }
                                obj.style.left=oLeft+"px";
                                obj.style.top=oTop+"px";
                                for(var i=0;i<obj1.length;i++){
                                   obj1[i].style.border='';
                                }
                                var nL=nearLi(obj,obj1);             
                                if(nL){
                                   nL.style.border='3px #0ccdba solid';
                                }
                    },false);
                    obj.addEventListener("touchend",function(){
                              document.removeEventListener("touchmove",defaultEvent,false);
                              var nL=nearLi(obj,obj1);
                              var tmp=0; 
                              if(nL){
                                      startMove( nL,{left:pos_arr1[number][obj.getAttribute("data-value")][0],top:pos_arr1[number][obj.getAttribute("data-value")][1]} );
                                      startMove( obj,{left:pos_arr1[number][nL.getAttribute("data-value")][0],top:pos_arr1[number][nL.getAttribute("data-value")][1]} );
                                      nL.style.border = '';
                                      tmp=obj.getAttribute("data-value");
                                      obj.setAttribute("data-value",nL.getAttribute("data-value"));
                                      nL.setAttribute("data-value",tmp)

                                      var arr2=[];
                                      setTimeout(function(){
                                          for(var i=0;i<obj1.length;i++){
                                            arr2.push(obj1[i].getAttribute("data-value"))
                                          }
                                          if(number==0){
                                             if( (Number(arr2[0])*Number(arr2[0])+Number(arr2[1]) )*Number(arr2[2])+Number(arr2[3])==15){
                                                success&&success()                                        
                                             }
                                          }else if(number==1){
                                            if(Number(arr2[0])*Number(arr2[0])+Number(arr2[1])-Number(arr2[3])==0){
                                                success&&success()  
                                            }
                                          }else if(number==2){
                                            if( (Number(arr2[0])-Number(arr2[1])*Number(arr2[1])-Number(arr2[2]))/Number(arr2[3]) ==-5){                                     
                                                success&&success() 
                                            }
                                          }else if(number==3){
                                              if( Number(arr2[0])==3&&Number(arr2[1])==0&&Number(arr2[2])==2&&Number(arr2[3])==1){
                                                success&&success() 
                                              }
                                          } 

                                      },1000)                                  
                              } 
                              else{
                                  startMove( obj,{left:pos_arr1[number][obj.index][0] ,top:pos_arr1[number][obj.index][1]} );
                              } 
                    },false);
                    function defaultEvent(e) {
                          e.preventDefault();
                    }  
        }   

        //找出最小的值
        function nearLi(obj,obj1){       
                    var value=9999;
                    var index=-1;     
                    for(var i=0;i<obj1.length;i++){
                        if( pz(obj,obj1[i]) && obj!=obj1[i] ){                
                             var c=jl(obj,obj1[i]);                
                             if(c<value){
                                value=c;
                                index=i;
                             }               
                        }
                    }       
                    if(index!=-1){
                        return obj1[index];
                    }
                    else{
                        return false;
                    }               
        }   

        //找出最近的距离
        function jl(obj1,obj2){     
                   var a=obj1.offsetLeft-obj2.offsetLeft;
                   var b=obj1.offsetTop-obj2.offsetTop;        
                   return Math.sqrt(a*a+b*b);        
        }    

        //碰撞检测   
        function pz(obj1,obj2){
                   var l1=obj1.offsetLeft;
                   var r1=l1+obj1.offsetWidth;
                   var t1=obj1.offsetTop;
                   var b1=t1+obj1.offsetHeight;
                    
                   var l2=obj2.offsetLeft;
                   var r2=l2+obj2.offsetWidth;
                   var t2=obj2.offsetTop;
                   var b2=t2+obj2.offsetHeight;                            
                   if (l2>r1 || l1>r2 || t1>b2 || t2>b1){
                    return false;
                   }
                   else{
                    return true;
                   }       
        }   


      /*封装运动函数*/
      function startMove(obj,json,endFn){ 
            clearInterval(obj.timer); 

            obj.timer = setInterval(function(){
              var bBtn = true;      
              for(var attr in json){        
                var iCur = 0;     
                if(attr == 'opacity'){
                  if(Math.round(parseFloat(getStyle(obj,attr))*100)==0){
                    iCur = Math.round(parseFloat(getStyle(obj,attr))*100);          
                  }
                  else{
                    iCur = Math.round(parseFloat(getStyle(obj,attr))*100) || 100;
                  } 
                }
                else{
                  iCur = parseInt(getStyle(obj,attr)) || 0;
                }
                
                var iSpeed = (json[attr] - iCur)/8;
                      iSpeed = iSpeed >0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
                if(iCur!=json[attr]){
                  bBtn = false;
                }
                
                if(attr == 'opacity'){
                  obj.style.filter = 'alpha(opacity=' +(iCur + iSpeed)+ ')';
                  obj.style.opacity = (iCur + iSpeed)/100;          
                }
                else{
                  obj.style[attr] = iCur + iSpeed + 'px';
                }               
              }     
              if(bBtn){
                clearInterval(obj.timer);       
                if(endFn){
                  endFn.call(obj);
                }
              }     
            },30);  
      } 

    /*获取行间样式*/
    function getStyle(obj,attr){
      if(obj.currentStyle){
        return obj.currentStyle[attr];
      }
      else{
        return getComputedStyle(obj,false)[attr];
      }
    }



