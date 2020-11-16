var tela = 1;
var wallpaper;
var fonte;
var fonte2;
var fonte3;
var music;
var wall;
var teste;


function setup(){
  createCanvas(700,500);
  wallpaper = loadImage('terra.jpg');
  fonte = loadFont('GrinchedRegular.otf');
  fonte2 = loadFont('digitalix.ttf');
  fonte3 = loadFont('Retron2000.ttf');
  music = loadSound('saturn.mp3');
  wall = loadImage('wall.png')
  teste = loadImage('teste (1).gif')
}

function draw(){
  //tela inicial
  if(tela==1){
    background(wallpaper);
    textFont(fonte);
    textSize (50);
    textAlign(CENTER);
    
    
    fill(255,255,255);
    text("PLANET CHEMISTRY", width/2, 100);
    textSize (25);
    text("Start", width/2, 173);
    text("Instructions", width/2, 223);
    text("Credits", width/2, 273);
    console.log(mouseY);
    
     if (mouseX <= 374 && mouseX >= 326 && mouseY >= 150 && mouseY <= 174) {
    //observação
    fill(64,224,208);
    text("Start", width/2, 173);
    //se apertar, ele leva pra outra tela
      if (mouseIsPressed) {
      tela = 2;
    }
}
    
     else if (mouseX <= 401 && mouseX >= 298 && mouseY >= 202 && mouseY <= 221) {
    //observação
    fill(64,224,208);
    text("Instructions", width/2, 223);
    //se apertar, ele leva pra outra tela
      if (mouseIsPressed) {
      tela = 3;
    }
}
    else if (mouseX <= 383 && mouseX >= 318 && mouseY >= 252 && mouseY <= 272) {
    //se estiver, o nome fica branco
    fill(64,224,208);
    text("Credits", width/2, 273);
    //se apertar, ele leva pra outra tela
      if (mouseIsPressed) {
      tela = 4;
    }
    }
}
  else if(tela==2){
    background(wall);
    fill(255,255,255);
    textSize (20);
    textFont(fonte2);
    text("Level 1", width/2, 28);
    textSize (15);
    textFont(fonte3);
    text("O metano (CH4) é um gás pertencente ao grupo dos hidrocarbonetos,\n compostos por carbono e hidrogênio, e é o segundo com maior potencial\n de agravamento de aquecimento global. Sua combustão completa produz CO2\n (dóxido de carbono) e H2O (água). Utilizando a Lei da Conservação\n da Massa, balanceie a equação de queima do metano:", width/2, 73);
    textSize (28);
    text("_CH4(g) + _O2(g) -> _CO2(g) + _H2O", width/2, 273);
    textSize (18); 
    text("press ESC to return", width/2, 450);
    if (keyIsDown(ESCAPE)){
      tela=1
    }

  }
  else if(tela==3){
    background(wall);
    textFont(fonte2);
    textSize (50);
    textAlign(CENTER);
    
    
    fill(255,255,255);
    text("Instructions", width/2, 100);
    textSize (14);
    textFont(fonte3);
    text("O jogo foi produzido para alunos do 9o ano do ensino fundamental\n com o intuito de desenvolver a habilidade EF09CI02 (Comparar quantidades\n de reagentes e produtos envolvidos em transformações químicas, estabelecendo\n a proporção entre as suas massas).", width/2, 173);
    text("O jogador deverá balancear as equações químicas seguindo a Lei da\n Conservação da Massa. É importante lembrar que os átomos presentes\n nos reagentes deverá ser igual à quantidade de átomos presentes nos produtos.", width/2, 273);
    textSize (18); 
    text("press ESC to return", width/2, 450);
    if (keyIsDown(ESCAPE)){
      tela=1
    }
  }
   else if(tela==4){
    background(wall);
    textFont(fonte2);
    textSize (50);
    textAlign(CENTER);
    
    
    fill(255,255,255);
    text("Credits", width/2, 100);
    textSize (18);
    textFont(fonte3);
    text("DISCENTE: LAURALISSE RIBEIRO DE OLIVEIRA\n DOCENTE: AQUILES BURLAMAQUI", width/2, 173);
     text("press ESC to return", width/2, 450);
     if (keyIsDown(ESCAPE)){
      tela=1
    }
  }
  }
