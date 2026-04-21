function setup() {
    createCanvas(720, 720);
    noLoop();
}

function draw() {
    // 空
    background(200, 230, 250);

    // 地面
    fill(140, 200, 130);
    noStroke();
    rect(0, 580, 720, 140);

    // 木の影
    fill(100, 160, 100);
    ellipse(360, 600, 400, 60);

    // 幹の影
    fill(60, 40, 25);
    rect(380, 350, 15, 230);

    // 幹
    fill(90, 60, 40);
    rect(340, 350, 40, 230);

    // 枝
    stroke(90, 60, 40);
    strokeWeight(15);
    line(360, 400, 240, 320);
    line(360, 400, 480, 320);
    line(360, 380, 300, 280);
    line(360, 380, 420, 280);
    line(360, 360, 360, 250);

    // 枝の先の小さい枝
    strokeWeight(8);
    line(240, 320, 180, 280);
    line(240, 320, 220, 260);
    line(480, 320, 540, 280);
    line(480, 320, 500, 260);
    line(300, 280, 270, 230);
    line(420, 280, 450, 230);
    line(360, 250, 340, 210);
    line(360, 250, 380, 210);

    noStroke();

    // 花の塊の影
    fill(200, 140, 170);
    ellipse(190, 280, 90, 90);
    ellipse(230, 260, 90, 90);
    ellipse(270, 230, 90, 90);
    ellipse(310, 230, 90, 90);
    ellipse(350, 210, 100, 100);
    ellipse(390, 210, 100, 100);
    ellipse(430, 230, 90, 90);
    ellipse(470, 230, 90, 90);
    ellipse(510, 260, 90, 90);
    ellipse(550, 280, 90, 90);
    ellipse(210, 320, 80, 80);
    ellipse(530, 320, 80, 80);
    ellipse(290, 290, 80, 80);
    ellipse(450, 290, 80, 80);
    ellipse(370, 270, 90, 90);

    // 桜の花の塊
    fill(255, 200, 220);
    ellipse(180, 270, 90, 90);
    ellipse(220, 250, 90, 90);
    ellipse(260, 220, 90, 90);
    ellipse(300, 220, 90, 90);
    ellipse(340, 200, 100, 100);
    ellipse(380, 200, 100, 100);
    ellipse(420, 220, 90, 90);
    ellipse(460, 220, 90, 90);
    ellipse(500, 250, 90, 90);
    ellipse(540, 270, 90, 90);
    ellipse(200, 310, 80, 80);
    ellipse(520, 310, 80, 80);
    ellipse(280, 280, 80, 80);
    ellipse(440, 280, 80, 80);
    ellipse(360, 260, 90, 90);

    // 風になびく花びら
    fill(255, 180, 210);
    push();
    translate(100, 450);
    rotate(0.6);
    ellipse(0, 0, 10, 22);
    pop();

    push();
    translate(150, 520);
    rotate(0.4);
    ellipse(0, 0, 10, 22);
    pop();

    push();
    translate(600, 480);
    rotate(0.8);
    ellipse(0, 0, 10, 22);
    pop();

    push();
    translate(650, 550);
    rotate(0.5);
    ellipse(0, 0, 10, 22);
    pop();

    push();
    translate(80, 600);
    rotate(0.9);
    ellipse(0, 0, 10, 22);
    pop();

    push();
    translate(200, 630);
    rotate(0.3);
    ellipse(0, 0, 10, 22);
    pop();

    push();
    translate(550, 620);
    rotate(0.7);
    ellipse(0, 0, 10, 22);
    pop();

    push();
    translate(670, 640);
    rotate(0.4);
    ellipse(0, 0, 10, 22);
    pop();

    push();
    translate(300, 500);
    rotate(0.6);
    ellipse(0, 0, 10, 22);
    pop();

    push();
    translate(450, 530);
    rotate(0.5);
    ellipse(0, 0, 10, 22);
    pop();


    // 太陽
    fill(255, 240, 180);
    ellipse(620, 120, 100, 100);
}
