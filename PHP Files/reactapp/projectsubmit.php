<?php 
    header('Access-Control-Allow-Origin: *');
     
    $conn = new mysqli("localhost","root","","reactjsdb");
     
    if(mysqli_connect_error()){
        echo mysqli_connect_error();
        exit();
    }
    else{
        $name=$_POST['name'];
        $category=$_POST['category'];
        $date=$_POST['date'];
        $time=$_POST['time'];
        $description=$_POST['description'];



        $sql = "INSERT INTO projects(name,category,date,time,description) VALUES('$name','$category','$date','$time','$description');";
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