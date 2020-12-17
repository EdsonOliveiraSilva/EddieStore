<?php

abstract class Connection
{
    protected static function getDb(){
    $conn = new PDO("mysql:host=localhost;dbname=estore;charset=utf8",
    "root",
    ""
    );

    if ($conn) {
        return $conn;
        
    } else {
        echo  "Connection error!";
    }
}
}

