function alteraCorBotao(menuItem) {
document.getElementsByClassName(menuItem)[0].style.backgroundColor = "rgb(236, 236, 236)";
};

function voltaCor (menuItem) {
document.getElementsByClassName(menuItem)[0].style.backgroundColor = "white";
}

/*function janelaQuartos (quarto) {
    window.open(`./quartos/indexQuarto${quarto}.html`,"nome","toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,top=300,left=400,width=640,height=380");
}*/

function abreGaleria() {
    window.location.href=('./indexGaleria.html') /*Abre o endereço na mesma janela */
}

function abreSite(site) {
    window.open(site)
}

function abreWhats () {
    window.open('https://api.whatsapp.com/send?phone=5549991596632');
}

function travaMenu() {
    document.body.scrollHeight
}

function abreImg(imagem) {
    window.location.href=(imagem)
}




document.addEventListener("DOMContentLoaded", () => {               // escuta quando a DOM carrega
    if (window.scrollY !== 0) {                                     //a posicao vertical do scroll da janela
        window.scrollTo(0, 0)                                       //então manda a barra do scroll para a posicao 0
    }

    const menu = document.querySelector(".menu")                    //seleciona a div menu
    const menuPositions = menu.getBoundingClientRect()              //const menuPosition recebe os dados de localizacao da div

    const handleStaticMenu = (addOrRemove = "add") => {             //cria função para add e remov a classe, se ela está no elemento, ela remove, senão ela cria
        const isStatic = menu.classList.contains("static")          //classList array com todas as classes do elemento //contains (se contem)
        if (addOrRemove === "add") {
            if (!isStatic) {
                menu.classList.add("static")
            }
        }
        else menu.classList.remove("static")
    }

    document.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY

        if (scrollPosition >= menuPositions.top) {
            handleStaticMenu()
        } else {
            handleStaticMenu("remove")
        }
    })
})

/* ((((((função método tradicional que o leonardo inseriu))))))
document.addEventListener('DOMContentLoaded', function teste() {
    console.log(document.querySelector('menu').getBoundingClientRect());

    document.addEventListener('scroll', function teste (){
        console.log(window.scrollY);
    })
})
*/

