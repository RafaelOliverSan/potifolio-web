function enviarWhatsApp(event) {

  event.preventDefault();

  const nome = document.getElementById("nome");
  const mensagem = document.getElementById("mensagem");
  const telefone = '5511962564106';
  const texto = ` Meu nome é ${nome.value}  ${mensagem.value}`;
  const msgFormatada = encodeURIComponent(texto);

  const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

  window.open(url, '_blank');
}