<?php
if(isset($_POST['contactFrmSubmit']) && !empty($_POST['name']) !empty($_POST['secondname']) && !empty($_POST['phone'])   && !empty($_POST['message'])){
    
    // Submitted form data
    $name   = $_POST['name'];
    $secondname = $_POST['secondname'];
    $phone = $_POST['phone'];
    $message= $_POST['message'];
    
    /*
     * Send email to admin
     */
    $to     = 'ira.sukach@gmail.com';
    $subject= 'Contact Request Submitted';
    
    $htmlContent = '
    <h4>Contact request has submitted at CodexWorld, details are given below.</h4>
    <table cellspacing="0" style="width: 300px; height: 200px;">
        <tr>
            <th>Имя:</th><td>'.$name.'</td>
        </tr>
        <tr>
        <th>Фамилия:</th><td>'.$secondname.'</td>
    </tr>
        
        <tr>
        <th>Телефон:</th><td>'.$phone.'</td>
    </tr>
        <tr>
            <th>Сообщение:</th><td>'.$message.'</td>
        </tr>
    </table>';
    
    // Set content-type header for sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    
    // Additional headers
    $headers .= 'From: CodexWorld<sender@example.com>' . "\r\n";
    
    // Send email
    if(mail($to,$subject,$htmlContent,$headers)){
        $status = 'ok';
    }else{
        $status = 'err';
    }
    
    // Output status
    echo $status;die;
}