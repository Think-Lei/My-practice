//Ajax是异步请求，还是跨域请求，所以这里需要安装node.js，安装http.server服务，才能实现Ajax的相关功能
var trigger = $('#trigger');
var card = $('#card');
var loaded = false;

trigger.on('click',function(){
  //card.toggle();这个方法可以实现点击按钮然后文本显示或隐藏
  //card.load('card.html');  //加载card.html页面
  //card.toggle();

  if(card.is(':visible')){
    card.slideUp();
  }else{
    if(!loaded){
      card.load('card.html');
      loaded = true;
    }else{
      card.slideDown();
    }
  }
})
