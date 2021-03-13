var canvas;
var m;
var b, rs, gs, bs, os; 
var s1, s2, s3, s4;

function preload(){
    m = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(670,600);

    //create 4 different surfaces
    gs = createSprite(580, 585, 150, 20);
    gs.shapeColor = "darkGreen";

    rs = createSprite(420, 585, 150, 20);
    rs.shapeColor = "darkRed";

    os = createSprite(260, 585, 150, 20);
    os.shapeColor = "orange";

    bs = createSprite(100, 585, 150, 20);
    bs.shapeColor = "darkBlue";
    //create box sprite and give velocity
    b = createSprite(335, 300, 25, 25);
    b.velocityX = 4;
    b.velocityY = 4;
}
function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    b.bounceOff(edges);
    m.play();
    //add condition to check if box touching surface and make it change color
    drawSprites();
 b.bounceOff(rs);
 b.bounceOff(bs);
 b.bounceOff(os);
 b.bounceOff(gs);

}
if (b.isTouching(rs)){
    b.changeColor = "darkRed";
}
if (b.isTouching(bs)){
    b.changeColor = "darkBlue";
}
if (b.isTouching(gs)){
    b.changeColor = "darkGreen";
}
if (b.isTouching(os)){
    b.changeColor = "orange";
}