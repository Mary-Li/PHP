/**
 * Created by LENOVO on 2016/8/2.
 */
// $(function () {
//     var i=0;
//     $("#account").on("change",function () {
//         console.log(++i);
//     });
// })

// $(function () {
//     //very very very important  非常非常重要的面试题
//     var account_js = document.getElementById("account");
//     alert(account_js);
//     alert($(account_js));//js转换为jQuery
//     alert($(account_js)[0]);//jQuery转换为js的第一种方法
//     alert($(account_js).get(0));//jQuery转换为js的第二种方法
// })

$(function () {
    $("#btn").on("click",function () {
        var account = $.trim($("#account").val());
        // console.log("account="+account);
        $.post("reg.php",{php:account},function (date) {
            var shxt = JSON.parse(date);
            console.log("status"+shxt.status+"message="+shxt.message);
            // console.log(date);
        });
    });
});