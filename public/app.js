console.log('3 ... 2 ... 1 ... liftoff');

const scene = document.querySelector('a-scene');
console.log(document.querySelector('a-scene'));
//add 1000 objects for the asteroid belt
for (let i = 0; i < 1000; i++) {
  let rocks = document.createElement('a-entity');
  let beltPosition = asteroidBelt();

  rocks.setAttribute('geometry', {
    primitive: 'octahedron',
    radius: Math.random() / 2
  });
  rocks.setAttribute('material', {
    color: 'rgb(41, 13, 13)'
  });
  rocks.setAttribute('position', {
    x: beltPosition[0],
    y: 1,
    z: beltPosition[1]
  });
  scene.appendChild(rocks);
}

for ( let i = 0; i < 1000; i++) {
  let belt =
  document.createElement('a-entity');
  let ringPosition = saturnRing();

  belt.setAttribute('geometry', {
    primitive: 'octahedron',
    radius: Math.random() / 10
  });
  belt.setAttribute('material', {
    color: 'rgb(69, 47, 47)'
  });
  belt.setAttribute('position', {
    x: ringPosition[0],
    y: 1,
    z: ringPosition[1]
  });
  belt.setAttribute('rotation', '0 45 45');
  scene.appendChild(belt);
}

//to get random coordinates for the asteroid belt
function asteroidBelt() {
  let radius = 75;
  let angle = Math.random() * Math.PI * 2;
  let pt_radius_sq = Math.random() * radius * radius;
  let rootOfRadius = Math.sqrt(pt_radius_sq);
  if (rootOfRadius < 10){
    rootOfRadius += 70;
  }else if (rootOfRadius < 20) {
    rootOfRadius += 60;
  }else if (rootOfRadius < 30) {
    rootOfRadius += 50;
  }else if (rootOfRadius < 40) {
    rootOfRadius += 40;
  }else if (rootOfRadius < 50) {
    rootOfRadius += 30;
  }else if (rootOfRadius < 60) {
    rootOfRadius += 20;
  }else if (rootOfRadius < 70) {
    rootOfRadius += 10;
  }
  let x = rootOfRadius * Math.cos(angle);
  let z = rootOfRadius * Math.sin(angle);
  let beltPosition = [x, z]

  return beltPosition
}

function saturnRing(){
  let radius = 10;
  let angle = Math.random() * Math.PI * 2;
  let pt_radius_sq = Math.random() * radius * radius;
  let rootOfRadius = Math.sqrt(pt_radius_sq);
  if (rootOfRadius < 5 ){
    rootOfRadius += 5;
  }
  let x = rootOfRadius * Math.cos(angle);
  let z = rootOfRadius * Math.sin(angle);
  z += -114
  let ringPosition = [x, z]
  return ringPosition

}
