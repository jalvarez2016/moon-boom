const BG_COLOR = "#231f20";

const gameScreen = document.getElementById("gameScreen");
let canvas, ctx;

function init() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    canvas.width = canvas.height = 600;
    ctx.fill = BG_COLOR;
    ctx.fillRect(0,0, canvas.width, canvas.height);

    document.addEventListener("keydown", keydown);
}

function keydown(e) {
    console.log(e.keyCode);
}
init();

const troop = new BasicTroop(1);
const playerOne = new Base("Jason", troop);
const troop2 = new BasicTroop(1);
const playerTwo = new Base("Jason2", troop2);
troop.setEnemyBase(playerTwo);
troop2.setEnemyBase(playerOne);