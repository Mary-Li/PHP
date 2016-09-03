<?php
    include "conn.php";
    $account = $_POST['account'];
    $password = $_POST['password'];

    $sql = "select *  from sys_user WHERE account='$account' AND password='$password'";

    $result = mysqli_query($db,$sql);

    if ($user=mysqli_fetch_assoc($result)){
        $arr = [
            'status'=>'success'
        ];
    }else{
        $arr = [
            'message'=>'失败'
        ];
    }
    echo json_encode($arr);

?>