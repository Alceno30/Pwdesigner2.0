<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Extrair dados do formulário
  $nome = $_POST['nome'];
  $email = $_POST['email'];
  $telefone = $_POST['telefone'];
  $assunto = $_POST['assunto'];
  $mensagem = $_POST['mensagem'];
  $tipoServico = $_POST['tipo_servico'];
  $documentos = $_FILES['documentos'];
  
  // Configurar o e-mail de destino
  $emailDestino = "ruansantos80@gmail.com";
  
  // Criar o corpo da mensagem
  $corpoMensagem = "**Nome:** $nome\n";
  $corpoMensagem .= "**E-mail:** $email\n";
  $corpoMensagem .= "**Telefone:** $telefone\n";
  $corpoMensagem .= "**Assunto:** $assunto\n";
  $corpoMensagem .= "**Mensagem:** $mensagem\n";
  $corpoMensagem .= "**Tipo de Serviço:** $tipoServico\n";
  
  // Configurar o cabeçalho do e-mail
  $cabecalho = "From: $email\n";
  $cabecalho .= "Reply-To: $email\n";
  $cabecalho .= "MIME-Version: 1.0\n";
  $cabecalho .= "Content-Type: text/plain\n";
  
  // Enviar o e-mail
  if (mail($emailDestino, $assunto, $corpoMensagem, $cabecalho)) {
    echo "E-mail enviado com sucesso!";
  } else {
    echo "Falha ao enviar o e-mail.";
  }
  
  // Lidar com os documentos enviados (opcional)
  // ... (código para processar os arquivos enviados) ...
}
?>
