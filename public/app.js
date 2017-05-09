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
    color: 'white'
  });
  obj.setAttribute('position', {
    x: position[0],
    y: 0,
    z: position[1]
  });
  scene.appendChild(obj);


}

function getRandColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandCoordz() {
  var radius = 40;
  var angle = Math.random() * Math.PI * 2;
  var pt_radius_sq = Math.random() * radius * radius;
  var rootOfRadius = Math.sqrt(pt_radius_sq);
  if (rootOfRadius < 38) {
    rootOfRadius += 38;
  }else if (rootOfRadius > 50) {
    rootOfRadius -= 10;
  }
  var x = rootOfRadius * Math.cos(angle);
  var z = rootOfRadius * Math.sin(angle);
  let position = [x, z]

  return position
}
