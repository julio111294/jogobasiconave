var x = 0,
    y = 0;
var jogo;
var frame;
var jogador;
var velocidade;
var px, py;
var w, h;

function pressed() {

    var tecla = event.keyCode;
    if (tecla == 38) {
        y = -1;


    } else if (tecla == 40) {
        y = 1;


    } else if (tecla == 37) {
        x = -1;

    } else if (tecla == 39) {
        x = 1;


    }
    if (tecla == 32) {



    }
}

function releasse() {
    var tecla = event.keyCode;

    if (tecla == 38) {
        y = 0;


    } else if (tecla == 40) {
        y = 0;


    } else if (tecla == 37) {
        x = 0;

    } else if (tecla == 39) {
        x = 0;


    }
    if (tecla == 32) {
        tiro(px + 50, py);


    }

}

document.addEventListener("load", game);
document.addEventListener("keydown", pressed);
document.addEventListener("keyup", releasse);

function game() {
    jogo = true;
    //x = 0;
    //y = 0;
    w = window.innerWidth;
    h = window.innerHeight;
    px = w / 2;
    py = h / 2;
    velocidade = 5;
    jogador = document.getElementById('nav');
    jogador.style.top = py + "px";
    jogador.style.left = px + "px";
    loop();


}

function loop() {
    if (jogo == true) {
        movernave();
        tiromovimento();

    }
    frame = requestAnimationFrame(loop);
}

function movernave() {
    py += y * velocidade;
    px += x * velocidade;
    jogador.style.top = py + "px";
    jogador.style.left = px + "px";


}

function tiro(tx, ty) {
    var t = document.createElement("div");
    var a1 = document.createAttribute("class");
    var a2 = document.createAttribute("style");
    a1.value = "tiro";
    a2.value = "top:" + ty + "px;left:" + tx + "px";
    t.setAttributeNode(a1);
    t.setAttributeNode(a2);
    document.body.appendChild(t);

}

function tiromovimento() {
    var tiros = document.getElementsByClassName("tiro");
    var tam = tiros.length;
    for (let i = 0; i < tam; i++) {
        if (tiros[i]) {
            var pt = tiros[i].offsetTop;
            pt -= velocidade;
            tiros[i].style.top = pt + "px";
            if (pt < 0) {
                tiros[i].remove();

            }

        }

    }
}