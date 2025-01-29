<?php
//credentials
$host = "plesk.remote.ac";
$username = "WS382270_WEBDEV";
$password = '6N$8cz04a';
$dbname = "WS382270_WEBDEV";
//connect to the database
$connect = mysqli_connect($host,$username,$password,$dbname);
 
if (!$connect){
    die("Connection to database failed...");
}

