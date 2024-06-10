//MUDANDO A IMAGEM DO ÍCONE DE CORAÇÃO
function mudarImagem(id) {
    document.getElementById(id).src = "images/coracao-vermelho-card.png"; // Muda a imagem para a segunda imagem quando o mouse passa por cima
}

function restaurarImagem(id) {
    document.getElementById(id).src = "images/coracao-cinza-removebg-preview.png"; // Restaura a imagem original quando o mouse sai de cima
}

function mudarIcone(id){
    document.getElementById(id).src = "images/bolsa-icone-rosa.png";
}

function restaurarIcone(id){
    document.getElementById(id).src = "images/bolsa-cinza-removebg-preview.png";
}
