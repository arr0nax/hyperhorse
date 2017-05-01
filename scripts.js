document.addEventListener("DOMContentLoaded", function(event) {

  var objects= [],
  layers = [];

  var world = document.getElementById('world'),
  viewport = document.getElementById('viewport'),
  crosshair = document.getElementById('crosshair'),
  worldXAngle = 0,
  worldYAngle = 0,
  crosshairX = window.innerWidth/2,
  crosshairY = window.innerHeight/2,
  d = -100;
  p = 400;

  viewport.style.webkitPerspective = p;
  viewport.style.MozPerspective = p;
  viewport.style.oPerspective = p;

  generate();

  function generate() {
    objects = [];
    layers = [];

    if(world.hasChildNodes()) {
      while(world.childNodes.length >= 1) {
        world.removeChild(world.firstChild);
      }
    }

    for(var j= 0; j < 5; j++) {
      objects.push( createCloud());
    }
  }

  function createCloud() {
    randox= random_x();
    randoy= random_y();
    randoz= random_z();
    for(var i =0; i<6; i++) {
      var div = document.createElement('div');
      div.className = 'cloudBase cube'+i;
      if (i === 0) {
        var t = 'translateX( ' + randox+ 'px ) \
        translateY( ' + randoy+ 'px ) \
        translateZ( ' + randoz+ 'px)';
        div.style.transform = t;
        world.appendChild(div);
      } else if (i === 1) {
        var t = 'translateX( ' + randox+ 'px ) \
        translateY( ' + randoy+ 'px ) \
        rotateX(180deg) \
        translateZ( ' + randoz+ 'px)';
        div.style.transform = t;
        world.appendChild(div);
      } else if (i === 2) {
        var t = 'translateX( ' + randox+ 'px ) \
        translateY( ' + randoy+ 'px ) \
        rotateX(90deg) \
        translateZ( ' + randoz+ 'px)';
        div.style.transform = t;
        world.appendChild(div);
      } else if (i === 3) {
        var t = 'translateX( ' + randox+ 'px ) \
        translateY( ' + randoy+ 'px ) \
        rotateX(-90deg) \
        translateZ( ' + randoz+ 'px)';
        div.style.transform = t;
        world.appendChild(div);
      } else if (i === 4) {
        var t = 'translateX( ' + randox+ 'px ) \
        translateY( ' + randoy+ 'px ) \
        rotateY(90deg) \
        translateZ( ' + randoz+ 'px)';
        div.style.transform = t;
        world.appendChild(div);
      } else if (i === 5) {
        var t = 'translateX( ' + randox+ 'px ) \
        translateY( ' + randoy+ 'px ) \
        rotateY(-90deg) \
        translateZ( ' + randoz+ 'px)';
        div.style.transform = t;
        world.appendChild(div);
      }
    }

    for( var j = 0; j < 5 + Math.round( Math.random() * 10 ); j++ ) {
    var cloud = document.createElement( 'div' );
    cloud.className = 'cloudLayer';

    cloud.data = {
      x: random_x(),
      y: random_y(),
      z: random_z(),
      a: random_a(),
      s: random_s(),
      rx: random_rx(),
      ry: random_ry()
    };
    var t = 'translateX( ' + cloud.data.x + 'px ) \
      translateY( ' + cloud.data.y + 'px ) \
      translateZ( ' + cloud.data.z + 'px ) \
      rotateZ( ' + cloud.data.a + 'deg ) \
      rotateX(' + cloud.data.rx+ 'deg) \
      rotateY(' + cloud.data.ry+ 'deg) \
      scale( ' + cloud.data.s + ' )';
    cloud.style.transform = t;

    div.appendChild( cloud );
    layers.push( cloud );
    console.log(cloud.data.a);
}


    return div;
  }

  function random_x() {
    return 256 - Math.random()*512;
  }
  function random_y() {
    return 256 - Math.random()*512;
  }
  function random_z() {
    return 1024 - Math.random()*2048;
  }
  function random_a() {
    return 180 - Math.random()*360;
  }
  function random_s() {
    return 2 - Math.random()*4;
  }
  function random_rx() {
    return 180 - Math.random()*360;
  }
  function random_ry() {
    return 180 - Math.random()*360;
  }

  window.addEventListener( 'mousemove', function(e) {
    worldYAngle = ( .5 - ( e.clientX / window.innerWidth ) ) * 360;
    worldXAngle = ( .5 - ( e.clientY / window.innerHeight ) ) * 360;
    updateView();
  });

  window.addEventListener( 'mousewheel', onContainerMouseWheel );
  // window.addEventListener( 'click', removeDiv );

  // window.addEventListener( 'keydown', function(e) {
  //   var speed = 70;
  //   if(e.keyCode === 68) {
  //     crosshairX += speed;
  //   }
  //   if(e.keyCode === 65) {
  //     crosshairX -= speed;
  //   }
  //   if(e.keyCode === 87) {
  //     crosshairY -= speed;
  //   }
  //   if(e.keyCode === 83) {
  //     crosshairY += speed;
  //   }
  //   if(e.keyCode === 32) {
  //     for(var i = 0; i < objects.length; i++ ) {
  //       console.log(objects[i].style.position);
  //     }
  //   }
  //   updateView();
  // });

  function updateView() {

    world.style.transform = 'translateZ( ' + d + 'px ) \
    rotateX( ' + worldXAngle + 'deg) \
    rotateY( ' + worldYAngle + 'deg)';

    // crosshair.style.top = crosshairY+'px';
    //
    // crosshair.style.left = crosshairX+'px';

  }

  function onContainerMouseWheel( event ) {

  event = event ? event : window.event;
  d = d - ( event.detail ? event.detail * -5 : event.wheelDelta / 8 );
  updateView();
  event.preventDefault();

}

// function removeDiv (event) {
//   console.log(event);
//   event.target.parentNode.removeChild(event.target);
// }

function update (){

  for( var j = 0; j < layers.length; j++ ) {
    var layer = layers[ j ];
    layer.data.a += layer.data.s;
    var t = 'translateX( ' + layer.data.x + 'px ) translateY( ' + layer.data.y + 'px ) translateZ( ' + layer.data.z + 'px ) rotateX('+layer.data.rx+'deg) rotateY('+layer.data.ry+'deg) rotateZ( ' + layer.data.a + 'deg ) scale( ' + layer.data.s + ')';
    layer.style.webkitTransform = t;
    layer.style.MozTransform = t;
    layer.style.oTransform = t;
  }

  requestAnimationFrame( update );

}

update();

//////////////AUDIO
});
var app = app || {};
var source;
var buffer;
var analyser;

window.onload = function () {

  function initiateAudio() {
    if(app.audio){
      app.audio.remove();
      window.cancelAnimationFrame(app.animationFrame);
    }
    app.audio = document.createElement('audio'); // creates an html audio element
    app.audio.src = 'shipwreck.mp3'; // sets the audio source to the dropped file
    app.audio.autoplay = true;
    app.audio.play();
    app.play = true;
    document.body.appendChild(app.audio);
    app.ctx = new (window.AudioContext || window.webkitAudioContext)(); // creates audioNode
    source = app.ctx.createMediaElementSource(app.audio); // creates audio source
    analyser = app.ctx.createAnalyser(); // creates analyserNode
    source.connect(app.ctx.destination); // connects the audioNode to the audioDestinationNode (computer speakers)
    source.connect(analyser); // connects the analyser node to the audioNode and the audioDestinationNode
    app.animate();
  }
  initiateAudio();
};
