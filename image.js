/**
 * Created by LENOVO on 2016/8/2.
 */
$(function () {
    $("button").on("click",function () {
       $.get("image.php",function (date) {
          var len = date.length;
           if(date!=null&&len>0){
               for (var i=0;i<len;i++){
                   $("div").append("<img src='"+date[i].image+"'><br/>");
               }
               $("div").append("<hr/>");
           }
       },'json');
    });
});