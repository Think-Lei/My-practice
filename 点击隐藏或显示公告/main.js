var card = $('#card');
var cardTrigger = $('#card-trigger');

//当鼠标点击时触发事件
//也可以这么写：cardTrigger.click(function({}))

cardTrigger.on('click',
function(){
  if(card.is(':visible')){
  card.hide();
  //card.slidedown(); 有动画效果
}
else {
  card.show();
  //card.slideup();
}
})
//当鼠标进入时改变样式
//也可以这么写：card.mouseenter(function(){})
card.on('mouseenter',function(){
  card.addClass('active');     //此时增加一个类
})

//当鼠标出去时又变回原来的样式
card.on('mouseleave',function(){
  card.removeClass('active');     //此时删除一个类
})
