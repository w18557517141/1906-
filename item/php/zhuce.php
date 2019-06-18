<?php
    header('content-type:text/html;charset=utf8');
    include('public.php');
    $uname = $_GET['uname'];
    $upwd = $_GET['upwd'];
    $sql ="select * from item where uname='$uname'";
    $res = mysqli_query($connect,$sql);
    $arr = mysqli_fetch_assoc($res);
    if($arr){
        echo json_encode(array(
            'state' => '0',
            'info' => '用户重复'
        ));
    }else{
        $insert = "insert into item (uname,upwd) values ('$uname','$upwd')";
        mysqli_query($connect,$insert);
        echo json_encode(array(
            'state' => '1',
            'info' => '注册成功'
        ));
    }

?>