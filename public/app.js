console.log('3 ... 2 ... 1 ... liftoff');

var scene = document.querySelector('a-scene');
console.log(document.querySelector('a-scene'));
for (var i = 0; i < 1000; i++) {
  var obj = document.createElement('a-entity');
  var position = getRandCoordz()

  obj.setAttribute('geometry', {
    primitive: 'octahedron',
    radius: Math.random() / 5
  });
  obj.setAttribute('material', {
    color: 'rgb(41, 13, 13)'
  });
  obj.setAttribute('position', {
    x: position[0],
    y: 0,
    z: position[1]
  });
  scene.appendChild(obj);


}

function getRandCoordz() {
  var radius = 75;
  var angle = Math.random() * Math.PI * 2;
  var pt_radius_sq = Math.random() * radius * radius;
  var rootOfRadius = Math.sqrt(pt_radius_sq);
  if (rootOfRadius < 10){
    rootOfRadius += 70
  }else if (rootOfRadius < 20) {
    rootOfRadius += 60
  }else if (rootOfRadius < 30) {
    rootOfRadius += 50
  }else if (rootOfRadius < 40) {
    rootOfRadius += 40;
  }else if (rootOfRadius < 50) {
    rootOfRadius += 30;
  }else if (rootOfRadius < 60) {
    rootOfRadius += 20
  }else if (rootOfRadius < 70) {
    rootOfRadius += 10
  }
  var x = rootOfRadius * Math.cos(angle);
  var z = rootOfRadius * Math.sin(angle);
  let position = [x, z]

  return position
}
