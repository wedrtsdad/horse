s_1="";
ob= [];
w="";
h="";
x=0;
y=0;
e1="";

function preload() {
    img1= loadImage("img123.jpg");
    img2= loadImage("2931423.jpg");
    b1= loadImage("1.jpg");
    k= loadImage("2.jpg");
}

function setup(){
    canvas= createCanvas(600,500);
    canvas.position(480,300);
    o_b= ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("s1").innerHTML=" : detecting.....";
}

function modelLoaded() {
    console.log("😎😎😎😎😎😎😎😎😎loaded😎😎😎😎😎😎😎😎😎");
    s_1= true;
    o_b.detect(canvas,g_r);
}

function draw() {
    image(k,25,25,550,450);
    current_img = image(k,25,25,550,450);
    if (document.getElementById("b2").clicked == true) {
        k.display();
    }

    if(s_1 != ""){
    for (i = 0; i < ob.length; i++) {

        w= ob[i].width;
        h= ob[i].height;
        x= ob[i].x;
        y= ob[i].y;
        e1= ob[i].label;
    
        fill("red");
        text(e1,x+5,y+100);
        noFill();
        stroke("red");
        rect(x,y,w,h);
        document.getElementById("s1").innerHTML=": "+e1;
    }
}
}

function a(){
    document.getElementById("s1").innerHTML=" : detecting.....";
    document.getElementById("b1").clicked = true;
    current_img = image(k,25,25,550,450);
    o_b.detect(k,g_r);
    if(s_1 != ""){
        for (i = 0; i < ob.length; i++) {
    
            w= ob[i].width;
            h= ob[i].height;
            x= ob[i].x;
            y= ob[i].y;
            e1= ob[i].label;
        
            fill("red");
            text(e1,x+5,y+100);
            noFill();
            stroke("red");
            rect(x,y,w,h);
            document.getElementById("s1").innerHTML=": "+e1;
        }
    }
}

function b(){
    document.getElementById("s1").innerHTML=" : detecting.....";
    document.getElementById("b2").clicked = true;
    current_img = image(b1,25,25,550,450);
    o_b.detect(b1,g_r);
    if(s_1 != ""){
        for (i = 0; i < ob.length; i++) {
    
            w= ob[i].width;
            h= ob[i].height;
            x= ob[i].x;
            y= ob[i].y;
            e1= ob[i].label;
        
            fill("red");
            text(e1,x+5,y+100);
            noFill();
            stroke("red");
            rect(x,y,w,h);
            document.getElementById("s1").innerHTML=": "+e1;
        }
    }
}

function g_r(error,result) {
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        ob= result;
    }
}