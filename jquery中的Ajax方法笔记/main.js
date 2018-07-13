//可以获取该目标地址的信息
// $.ajax('https://api.github.com/users/biaoyansu')
//  .done(function(data){
//    console.log("data:",data);
//  })

//
 var form = $('#search');
 var input = $('input#username');
 var result = $('#result');
 var username;

form.on('submit',function(e){
  e.preventDefault();  //浏览器默认是不支持Ajax请求的，所以要阻止这个默认
  username = input.val(); //username等于input中获取的值
  $.ajax('https://api.github.com/users/'+username)
     .done(function(data){
       //console.log("data:",data);
       var html =
         '<div>用户名:' + data.login +'</div>'+
         '<div>介绍:' + (data.bio || "无") + '</div>'
       result.html(html);
 })
})


//关于Ajax方法的一些介绍
// $.ajax(
// {
//   url: '', 目标地址
//   method: 'get|post', get是获取一段数据，post是发送一段数据时用的
//   data 参数
//   data:{     假如是post，就将要发送的数据放在这个data中
//     username: 'whh',
//     password: 'asdf',
//   },
//   success 参数
//   success: function(data){ 这是一个回调函数，就是当这个异步请求成功时，我们想做些什么
//     ...             这个data是请求成功后服务器下发的一个数据，你可以根据这些数据去做些其他的事情
//   },
//   error 参数
//   error: function(){ 当请求失败时，你可以alert()、写日志、通知用户当前网络状况不好...
//     ...
//   }
// })



//还有一些封装好的轻量一点的方法，大部分情况下用下面这些方法，只有在很奇葩的需求时，才会用到上面细致的设置
$.post('url',{
  username: 'whh',
  password: 'asdf',
})
$.get('url');
$.getJson('url');    //用于获取数据，返回的是json格式的数据
$.getScript('url');  //用于获取代码
