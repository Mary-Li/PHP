/**
 * Created by LENOVO on 2016/8/5.
 */

var loginjs = {
    login:function () {
        $("button").on("click",function () {
            var account = $.trim($("#account").val());
            var password = $.trim($("#password").val());

            if(account===""){
                $("#error").html("请输入用户名");
                $("account").focus();
                return false;
            }

            if(password===""){
                $("#error").html("请输入密码");
                $("password").focus();
                return false;
            }

            $.post("php/login.php",
                {
                    account:account,
                    password:password
                },function (date) {
                    alert(date);
                    if (date.status==="success"){
                        window.location.href="index.html";
                    }else {
                        $("#error").html(date.message);
                        return ;
                    }
                },"json");
        });
    }
};
