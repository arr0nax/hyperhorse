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
  d = -600;
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
    return 256 - Math.random()*512;
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
displaySound = function(){

  var ctx = new AudioContext()
    , url = 'shipwreck.mp3'
    , audio = new Audio(url)
    // 2048 sample buffer, 1 channel in, 1 channel out
    , processor = ctx.createScriptProcessor(2048, 1, 1)
    , meter = document.getElementById('meter')
    , source

  audio.addEventListener('canplaythrough', function(){
    source = ctx.createMediaElementSource(audio)
    source.connect(processor)
    source.connect(ctx.destination)
    processor.connect(ctx.destination)
    audio.play()
  }, false);

  // loop through PCM data and calculate average
  // volume for a given 2048 sample buffer
  processor.onaudioprocess = function(evt){
    var input = evt.inputBuffer.getChannelData(0)
      , len = input.length
      , total = i = 0
      , rms
    while ( i < len ) total += Math.abs( input[i++] )
    rms = Math.sqrt( total / len )
    d = ( rms * 500 ) - 500;
  }

}
displaySound();

setInterval(function() {
  updateView();
}, 5);

});
