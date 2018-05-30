<?php

// readfile('../../dummyData/readData.json');

require_once('mysql_credentials.php');

$query = "SELECT * FROM tasks";

if(!empty($_GET['id'])){
    $_GET['id'] = addslashes($_GET['id']);
    $query .= " WHERE ID='{$_GET['id']}'";
};

$result = mysqli_query($conn, $query);
$output = ['success' => false,
            'tasks' => [],
            'user' => [],
            'errors' => []
        ];

if($result){
    // query is working
    if(mysqli_num_rows($result)>0){
        //query returned data
        $output['success'] = true;
        while($row = mysqli_fetch_assoc($result)){
            $output['tasks'][] = $row;
        }
    }
    else{
        // no data from query
        $output['errors'][] = "no data available";
    }

}
else{
    // mysql problem
    $output['errors'][] = 'error with query';
}

// print_r($output);

$json_output = json_encode($output);
print($json_output);

?>