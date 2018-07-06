//input的值不能用之前所说的html()或者text()方法来获取，只能用val()
//如果要给input设置值，那么只要在val()中传参即可
//var nn = $('#nickname').val();
//console.log(nn);

//focus()高亮 ，blur()不要激活或聚焦这个输入框,select()方法是全部选中
//$('#nickname').focus();

//focus可以作为事件的监听者，当focu事件发生时，可以调用什么函数
//$('#nickname').focus(function(){

//});

//提交表单
//$('#login').submit();

//当点击按钮时就提交
$('#login-trigger').on('click',function(){
  $('#login').submit();
})
