<?php
  if (isset($_GET['get_path'])) {

    
    $domain = $_SERVER['HTTP_ORIGIN'] . "/";
    $complete_url = $_SERVER['HTTP_REFERER'];

    $relative_path = str_replace($domain, "", $complete_url);
    $page_name = explode("?", $relative_path)[0];

    $response['page'] = $page_name;

    echo json_encode($response);



  }


 ?>
