function alteraCorBotao(menuItem) {
document.getElementsByClassName(menuItem)[0].style.backgroundColor = "rgb(236, 236, 236)";
};

function voltaCor (menuItem) {
document.getElementsByClassName(menuItem)[0].style.backgroundColor = "white";
}

function janelaQuartos (quarto) {
    window.open(`./quartos/indexQuarto${quarto}.html`,"nome","toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,top=300,left=400,width=640,height=380");
}


