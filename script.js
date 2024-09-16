
function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('foto').children[0];  // Acessa a imagem dentro da div "foto"
    var data = new Date();
    var hora = data.getHours();

    msg.innerHTML = `Agora são ${hora} horas.`;

    if (hora >= 0 && hora < 12) {
        img.src = "pexels-pixabay-247587.jpg";
        img.alt = "Imagem da manhã" ;  document.body.style.background="#f5f5dc"
    } else if (hora >= 12 && hora < 18) {
        img.src = "pexels-nihat-12231-69224.jpg";  // Altera o atributo src para tarde
        img.alt = "Imagem da tarde";
document.body.style.background="orange"
    } else {
        img.src = "pexels-rbrigant44-771883.jpg";  // Altera o atributo src para noite
        img.alt = "Imagem da noite";
   document.body.style.background="black"
   
    }
}
