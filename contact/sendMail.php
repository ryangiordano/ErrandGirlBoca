<?
$errors = array();
$data = array();

//variables//
if(empty($_POST['name'])){
	$errors['name'] = 'Name is required.';
}
if(empty($_POST['phone'])){
	$errors['phone'] = 'Phone Number is required.';
}
if(empty($_POST['email'])){
	$errors['email'] = 'Email is required.';
}
//response for errors
if(!empty($errors)){
	$data['success'] = false;
	$data['errors'] = $errors;
}else{
	//if no errors, return:
	$data['success'] = true;
	$data['message'] = 'Mail successfully sent';

	$address = 'rgiorda1@gmail.com';
	$email = $_POST['email'];
	$phone= $_POST['phone'];
	$name= $_POST['name'];
	$text= $_POST['text'];

    $subject = $name .' is interested in Errand Girl Boca';


      $headers = "From: " . $email . "\r\n" .
          "Reply-To: ". $email . "\r\n" .
          "X-Mailer: PHP/" . phpversion();
      $headers .= "MIME-Version: 1.0\r\n";
      $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

      mail($address,  $subject,  $text,  $headers);
}
//return data to an ajax call

echo json_encode($data);

?>
