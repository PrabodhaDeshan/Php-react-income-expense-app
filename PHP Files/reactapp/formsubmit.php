<?php 
    header('Access-Control-Allow-Origin: *');
     
    $conn = new mysqli("localhost","root","","reactjsdb");
     
    if(mysqli_connect_error()){
        echo mysqli_connect_error();
        exit();
    }
    else{
        $name = $_POST['name'];
        $contact = $_POST['contact'];
        $address=$_POST['address'];
        $id_number = $_POST['id_number'];
        $city = $_POST['city'];
        $project = $_POST['project'];
        $sql = "INSERT INTO customers(name,contact,address,id_number,city,project) VALUES('$name','$contact','$address','$id_number','$city','$project');";
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