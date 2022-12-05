var globs = 2 // Number of "Paintballs" on screen
var globMax = 15 // Max number of nodes a ball can consist of
var globMin = 10 // Min number of nodes a ball can consist of

var gravity = .25 // Gravity for falling

var globList = [] //List of "Paintball" nodes

var n = 10

var display = 1;

var gravityY = -2;
var gravityDirection

class Paintball{
  constructor(position, connection, gpull, gpush, color){
    this.gravity = 0;
    this.children = 0;
    this.position = position
    this.color = color
    var x = random(0,5)
    var y = random(0,5)
    this.ease = createVector(position.x + x, position.y +y)
    this.connection = connection
    this.force = createVector(0,0);
    this.globPull = 100 // Gravity of nodes pulling in children
    this.globPush = 100 // Stops nodes from collapsing with children
  }

  getConnected(){
    return this.connection
  }

  easeOpp(){
    return [this.position.x + (this.position.x - this.ease.x),
            this.position.y + (this.position.y - this.ease.y)]
  }

  update(){
    var force = this.force.copy()
    var vel = force.copy().div(1)
    this.position.add(vel)
    this.position.x = constrain(this.position.x, -width/2, width/2)
    this.ease.add(vel)
  }
}



function applyForces(nodes){
    //Apply gravity
    nodes.forEach(node =>{
      if ((node.position.y < height/2 || gravity < 0) &&
          (gravity < 0 || node.position.y > -height/2)){
        gravityDirection = createVector(0,gravityY)
        var gravityLoc = gravityDirection.mult(-1).mult(gravity)
        node.force = gravityLoc
      }
      else{
        node.force = createVector(0,0)
      }
    })

    //repulsion should only happen between nodes within connected graph
    //
    var Index = 0;
    for(let i = 0; i < globs; i++){
      var visited = []
      var tempIndex = 0
      while(true){
        visited.push(Index + tempIndex);
        if (visited.includes(globList[Index + tempIndex].getConnected())){
          break
        }
        tempIndex+=1
      }
      for (let k = 0; k < nodes.length; k++) {
        for (let j = k + 1; j < nodes.length; j++) {
          var pos = nodes[k].position
          var dir = nodes[j].position.copy().sub(pos)
          var force = dir.div(dir.mag() * dir.mag())
          force.mult(1)
          nodes[k].force.add(force.copy().mult(-1))
          nodes[j].force.add(force)
        }
      }
      Index += tempIndex
    }

    //Apply attraction to connected node
    nodes.forEach(node =>{
        let node1 = node
        let node2 = globList[node.connection]
        let maxDis = node.gPull
        let dis = node1.position.copy().sub(node2.position)
        diff = dis.mag() - maxDis
        node1.force.sub(dis.mult(.01))
        node2.force.add(dis.mult(.01))
    })
}

function mouseClicked(){
  display = -display
  gravityY = -gravityY
}

function setup() {
  var canvas = createCanvas(900/3, 1600/3)
  canvas.parent('lava-constrain');
  var color = "red"
  var Index = 0;
  for (let i = 0; i < globs; i++){

    var tempIndex = 0;
    var pointCount = int(random(globMin, globMax))

    for (let k = 0; k < pointCount-1; k++){
      var x = random(-200,200);
      var y = random(0,100);
      globList[Index+tempIndex] = new Paintball(createVector(x,y),
                                               Index + tempIndex + 1,
                                               0,0,
                                               color)
      tempIndex += 1
    }
    var x2 = random(50,350);
    var y2 = random(0,100);
    globList[Index+tempIndex] = new Paintball(createVector(x2,y2),
                                              Index,
                                              0,0,
                                              color)
    tempIndex+=1
    Index+=tempIndex
  }
}

function draw() {
  translate(width / 2, height/2)
  clear()
  applyForces(globList);
  globList.forEach(node =>{
    node.update();
  })
  noStroke()

  beginShape(TESS)

  fill("red")
  var wholeShape = globList[0];
  var v = 0;
  globList.forEach(globPart =>{
    vertex(globPart.position.x * display, globPart.position.y * display)
    if (globList[globPart.getConnected()]==wholeShape){
      endShape(CLOSE)
      beginShape(TESS)
      if (globPart != globList[globList.length]){
        wholeShape = globList[v + 1]
      }
    }
    v += 1
  })
  endShape(CLOSE)
  globList.forEach(globPart =>{
    fill("red")
    bezier(
      globPart.position.x * display,
      globPart.position.y * display,
      globPart.ease.x * display,
      globPart.ease.y * display,
      globList[globPart.getConnected()].easeOpp()[0] * display,
      globList[globPart.getConnected()].easeOpp()[1] * display,
      globList[globPart.getConnected()].position.x * display,
      globList[globPart.getConnected()].position.y * display)
  })

}


function show3(){
  document.getElementById('lava-dropdown').classList.toggle("active");
  return;
}

$("#hourglass").click(function(){
  show3();
});
