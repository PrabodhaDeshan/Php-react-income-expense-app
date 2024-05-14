<?php 
    header('Access-Control-Allow-Origin: *');
     
    $conn = new mysqli("localhost","root","","reactjsdb");
     
    if(mysqli_connect_error()){
        echo mysqli_connect_error();
        exit();
    }
    else{
        $actype = $_POST['actype'];
        $amount=$_POST['amount'];
        $date=$_POST['date'];
        $time=$_POST['time'];
        $description=$_POST['description'];



        $sql = "INSERT INTO income(actype,amount,date,time,description) VALUES('$actype','$amount','$date','$time','$description');";
        $res = mysqli_query($conn, $sql);
         
        if($res){
            echo "Success!";
        }
        else{
            echo "Error!";
        }
        $conn->close();
    }
?>