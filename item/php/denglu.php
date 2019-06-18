<?php
    header("content-type:text/html;charset=utf8");
    include('public.php');
    $uname = $_GET['uname'];
    $upwd = $_GET['upwd'];
    $sql = "select * from item where uname = '$uname'";
    $res = mysqli_query($connect,$sql);
    $arr = mysqli_fetch_assoc($res);
    if($arr){
        if($upwd == $arr['upwd']){
            echo json_encode(array(
                'state' => '1',
                'info' => '登录成功'
            ));
        }else{
            echo json_encode(array(
                'state' => '0',
                'info' => '密码错误'
            ));
        }
    }else{
        echo json_encode(array(
            'state' => '0',
            'info' => '用户不存在'
        ));
    }
?>