<?php 
    header('Access-Control-Allow-Origin: *');
     
    $conn = new mysqli("localhost","root","","reactjsdb");
     
    if(mysqli_connect_error()){
        echo mysqli_connect_error();
        exit();
    }
    else{
       
        $category=$_POST['category'];
        $amount=$_POST['amount'];
        $date=$_POST['date'];
        $time=$_POST['time'];
        $description=$_POST['description'];



        $sql = "INSERT INTO expenses(category,amount,date,time,description) VALUES('$category','$amount','$date','$time','$description');";
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