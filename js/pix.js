function copiarPix() {
    // Seleciona o elemento de input que contém o email
    var emailElement = document.getElementById("emailToCopy");

    // Seleciona o texto dentro do input
    emailElement.select();

    // Copia o texto selecionado para a área de transferência
    document.execCommand("copy");

    // Deseleciona o texto (opcional)
    window.getSelection().removeAllRanges();

    // Mensagem de confirmação (opcional)
    alert("Chave PIX copiada.");
}
