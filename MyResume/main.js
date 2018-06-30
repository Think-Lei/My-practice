// 给浏览器绑定滚动事件
// window.onscroll=function(){
//   var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//   // alert(scrollTop);
// }

//判断鼠标是向上滚动还是向下滚动
var scrollFunc=function(ev){
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //获取当前的滚动条的高度
  var oEvent= ev||event;
  if(oEvent.wheelDelta){ //判断浏览器IE，Chrome滑轮事件
    if(oEvent.wheelDelta>0){  //向上滚动
      if(scrollTop<978){
        //当前页面为第一个页面，就算鼠标向上滑动，不会有相应的反应
      }
      if(scrollTop==1961){
        scrollTop=978;
        // window.scrollTo(0,978);
      }
      if(scrollTop==2964){
        scrollTop=1961;
      }
    }
    else{
      if(scrollTop<978){  //向下滚动
        scrollTop=1961;
      }
      if(scrollTop==1961){
        scrollTop=2694;
      }
      if(scrollTop==2964){
        //最后一页还向下滚动就啥也不做了
      }
    }
  }
  else if(oEvent.detail){ //FF 滑轮事件
    if(oEvent.detail>0){
      alert('向上滚动');
    }
    else{
      alert('向下滚动');
    }
  }
}
//给页面绑定滑轮滚动事件
   if (document.addEventListener) {//firefox
       document.addEventListener('DOMMouseScroll', scrollFunc, false);
   }
   //滚动滑轮触发scrollFunc方法  //ie 谷歌  = document.onmousewheel
   window.onmousewheel = scrollFunc;
