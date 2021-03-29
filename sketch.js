//let nb;
//let nb2;
//let nb3;
let nbarray = [];
let u= 256
let detailX;
let detailY;
// 初始內容
function setup() {
  createCanvas(600, 600, WEBGL);
  color(255,204,0);// 決定 使用 3D 方式進行渲染
  for(let i=0;i<5;i+=1){
    // 怎麼把東西放到 nbarray 袋子裡面的公式
    nbarray.push(new myBox(50,-height/2+(height/5)*i,0,50));
    detailX = createSlider(2, 24, 12);
  detailX.position(10, height + 5);
  detailX.style('width', '80px');
    
    detailY = createSlider(23, 36, 53);
  detailY.position(10, height + 30);
  detailY.style('width', '80px');
  }
  //nb = new myBox(50,50,0,50);
  //nb2 = new myBox(-50,150,0,25);
  //nb3 = new myBox(-150,100,0,50);
}
function draw() {
  background(200);
  rotateY(mouseX/35);
  // 將袋子中 所有 東西 稱為 V 執行他的相關函式
  nbarray.forEach((v)=>{
    v.display();
  })
  //nb.display();
  //nb2.display();
  //nb3.display();

}


// 自訂一個類別物件
class myBox{
  // 怎樣建構這個物件 只執行一次
  constructor(x,y,z,size){
    this.x=x;
    this.y=y;
    this.z=z;
    this.size=size;
    this.mx = 1;
    this.my= 2;
    this.cc =color(random(255),0,0);
    this.stella= new stella(this.x,this.y,this.z,this.size*0.25,this.size*1.5);
    this.stella2= new stella2(this.x,this.y,this.z,this.size*0.25,this.size*2.6);
     this.stella3= new stella3(1.2*this.x,this.y,this.z,this.size*0.4,this.size*1.3);
    this.stella4= new stella4(this.x,this.y,this.z,this.size,this.size*3);
    
  }
  // 定義一些能力 我們呼叫時 執行 
  // 能力1:顯現這box
  display(){
    push();
      translate(this.x,this.y,this.z);  
      if (mouseX-width/2 > this.x-this.size/2 && 
          mouseX-width/2 < this.x+this.size/2 &&
          mouseY-height/2 > this.y-this.size/2 && 
          mouseY-height/2 < this.y+this.size/2){
        rotateX(frameCount*0.01);
        rotateY(frameCount*0.01);
        this.mx = this.mx+0.5;
        }
    this.stella.display();
     this.stella2.display();
    this.stella3.display();
    this.stella4.display();
      fill(this.cc,this.cc,20,this.cc);
    stroke(20,-1*mouseX, 220, 0)
      box(this.size);
    
    pop();
    this.move();

  }
  //能力2:移動規則
  move(){
    if (this.x>width/2){this.mx = -1*this.mx;}
    if (this.x<-width/2){this.mx = -1*this.mx;} 
    if (this.y>height/2){this.my = -1.2*this.my;}
    if (this.y<-height/2){this.my = -0.8*this.my;}  
    this.x = this.x + this.mx;
    this.y = this.y + this.my;
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    u=u+10;
  } else if (keyCode === DOWN_ARROW) {
    u=u-10;
  }
  }

//衛星
class stella{
  constructor(x,y,z,size,cdx){
  this.x=x;
    this.y=y;
    this.z=z;
    this.size=size;
  this.cdx=cdx;
    this.cc= color(0,random(255),random(255));
  }
  display(){
    push();
    rotateZ(frameCount*0.01);
    translate(this.cdx,0,0);
    fill(this.cc);
    noStroke();
    sphere(this.size);
    pop();
  }
}

class stella2{
  constructor(x,y,z,size,cdx){
  this.x=x;
    this.y=y;
    this.z=z;
    this.size=size;
  this.cdx=cdx;
    this.cc= color(random(255),60,20,80);
  }
  display(){
    push();
    rotateZ(frameCount*0.1);
    rotateY(frameCount*-0.03);
    translate(this.cdx,0,0);
    fill(this.cc);
    noStroke();
    cone(this.size);;
    pop();
  }
}

class stella3{
  constructor(x,y,z,size,cdx){
  this.x=x;
    this.y=y;
    this.z=z;
    this.size=size;
  this.cdx=cdx;
    this.cc= color(3,random(255),200);
  }
  display(){
    push();
    rotateZ(frameCount*-0.035);
    translate(this.cdx,0,0);
    fill(this.cc);
    stroke(random(200));
    rotateY(millis() / 1000);
  torus(30, 15, detailX.value(), 12);
    pop();
  }
}

class stella4{
  constructor(x,y,z,size,cdx){
  this.x=x;
    this.y=y;
    this.z=z;
    this.size=size;
  this.cdx=cdx;
    this.cc=color(random(255))
  }
  display(){
    push();
    rotateZ(frameCount*-0.035);
    rotateX(frameCount*-0.035);
    translate(this.cdx,0,0);
    fill(this.cc);
    noStroke();
rotateY(millis() / 1000);
  cone(30, 65, 16, detailY.value());
    pop();
  }
}
