<?php
/**
 * Created by PhpStorm.
 * User: LENOVO
 * Date: 2016/8/2
 * Time: 15:39
 */


$conn  = mysqli_connect('127.0.0.1','root','');

if(mysqli_errno($conn )){
    echo mysqli_error($conn );
    exit;
}

mysqli_select_db($conn,'php');

mysqli_set_charset($conn ,'utf8');

$account = $_POST['php'];

//select count(*) num from sys_user where account = '".$account."'
$sql = "SELECT count(*) num FROM sys_user WHERE account = '".$account."'";
//$sql = "select count(*) num from sys_user where account = '".$account."'";

$result = mysqli_query($conn ,$sql);

$count = mysqli_fetch_assoc($result);
//var_dump($arr1);
        if ($count["num"]>0){
            $arr = [
                'status'=>'error',
                'message'=>'该用户名已被注册'
            ];
        }else{
//            header("Location:main.html");//重定向另一个页面
            $arr = [
                'status' => 'success',
                'message' => '该用户可以使用'
            ];
        }
    echo json_encode($arr);
        /**/

//echo 'wukong----';


//mysqli_close($db);
?>