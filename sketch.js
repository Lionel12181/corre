var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg, pathImage;
var i;

function preload(){
//loadImage de path (camino)
path = loadImage("path.png");

//loadAnimation de boy (niño) 
boy = loadAnimation("jake1.png","jake2.png","jake3.png","jake4.png","jake5.png");
}

function setup(){
  
  createCanvas(400,400);
//crear sprite de path (camino) 
path = createSprite(200,180,400,20) 
//agregar imagen de path
path.addImage("path.png",path.png);

//Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
ground.x = ground.width /2;

//crear sprite de boy (niño)
boy = createSprite(50,180,20,50);
//agregar animación para boy
boy.addImage(jake1)

// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(0,0,100,800);
////establecer visibilidad como false (falso) para límite izquierdo
leftBoundary.leftBoundary = false

//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800);
//establecer visibilidad como false (falso) para límite izquierdo
rightBoundary.rightBoundary = false

}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // boy moviéndose en el eje X con el mouse
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colisión de boy con los límites derecho e izquierdo invisibles

  
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
