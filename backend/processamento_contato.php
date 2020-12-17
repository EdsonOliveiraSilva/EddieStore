<?php
session_start();

//Aqui definimos os parametros para a conexao com o banco de dados
define('Hostname', 'localhost');
define('Username', 'root');
define('Password', '');
define('DB', 'estore');

//Fazemos uma conexao com o banco de dados passando os parametros definidos anteriormente
$conexao = mysqli_connect(Hostname, Username, Password, DB) ;

$nome = $_POST['nome'];
$msg = $_POST['msg'];

$query = "INSERT INTO comentarios (nome, msg) 
VALUES ('$nome', '$msg')";

if ($conexao->query($query) === TRUE){
    $_SESSION['status_contato'] = true;
}

$conexao->close();

echo "<script>
alert('Mensagem processada!');
window.location.href='http://localhost:3001/contato';
</script>";

?>
