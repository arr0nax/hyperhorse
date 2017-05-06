document.addEventListener("DOMContentLoaded", function(event) {
  var objects= [],
  cube_array = [],
  audio_copy,
  low_copy,
  mid_copy,
  high_copy,
  rms_copy,
  layers = [];
  var images = ['313ePOL.png','apple-logo-rainbow.png','bern.png','blank.png','blank2.png','blank3.png','geo.png','guy.png','guy2.png','horse.png','mlp.png','pink_leaf.gif','poke.png','purp.jpg','simba_khii.png','snoop.jpg','spiral.png','sword.png','tri.png','wire.GIF','bath 1.png','bath 2.png','couple.png','cross.png','eq1.gif','eq2.png','eq3.png','fire ring1.png','flower of life.png','galaxy s8.png','Galaxy1.png','gary.png','getty.png','hex.png','sink.png','snail1.png','snail2.gif','Snail3.png','spiral1.png','spiral2.png','spiral3.png','spiral4.png','spiral5.png','spiral7.png','thingy.png','toilet.png'];

  var button = document.getElementById('pause')
  button.onclick = function() {
    if(audio_copy.paused) {
      audio_copy.play();
    } else {
      audio_copy.pause();
    }
  }
  var songbutton1 = document.getElementById('Song1')
  songbutton1.onclick = function() {
    displaySound('../audio/house No. 2.mp3');
  }
  var songbutton2 = document.getElementById('Song2')
  songbutton2.onclick = function() {
    displaySound('../audio/house no. 6.mp3');

  }
  var songbutton3 = document.getElementById('Song3')
  songbutton3.onclick = function() {
    displaySound('../audio/house no. 3.mp3');
  }
  window.addEventListener( 'keydown', function(e) {
    if(e.keyCode === 32) {
      if(audio_copy.paused) {
        audio_copy.play();
      } else {
        audio_copy.pause();
      }
    }
  });


  var world = document.getElementById('world'),
  viewport = document.getElementById('viewport'),
  crosshair = document.getElementById('crosshair'),
  low_meter = document.getElementById('low'),
  mid_meter = document.getElementById('mid'),
  high_meter = document.getElementById('high'),
  worldXAngle = 0,
  worldYAngle = 0,
  crosshairX = window.innerWidth/2,
  crosshairY = window.innerHeight/2,
  d = -600;
  user_d = -600;
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
    for(var i =0; i<14; i++) {
      var div = document.createElement('div');
      div.className = 'cloudBase cube'+i;
      div.data = {
        z: randoz,
        y: randoy,
        x: randox
      }
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
      } else if (i === 6) {
        var t = 'translateX( ' + randox+ 'px ) \
        translateY( ' + randoy+ 'px ) \
        rotateY(45deg) \
        rotateX(45deg) \
        translateZ( ' + randoz+ 'px)';
        div.style.transform = t;
        world.appendChild(div);
      } else if (i === 7) {
        var t = 'translateX( ' + randox+ 'px ) \
        translateY( ' + randoy+ 'px ) \
        rotateY(-45deg) \
        rotateX(45deg) \
        translateZ( ' + randoz+ 'px)';
        div.style.transform = t;
        world.appendChild(div);
      } else if (i === 8) {
        var t = 'translateX( ' + randox+ 'px ) \
        translateY( ' + randoy+ 'px ) \
        rotateY(45deg) \
        rotateX(-45deg) \
        translateZ( ' + randoz+ 'px)';
        div.style.transform = t;
        world.appendChild(div);
      } else if (i === 9) {
        var t = 'translateX( ' + randox+ 'px ) \
        translateY( ' + randoy+ 'px ) \
        rotateY(-45deg) \
        rotateX(-45deg) \
        translateZ( ' + randoz+ 'px)';
        div.style.transform = t;
        world.appendChild(div);
      } else if (i === 10) {
        var t = 'translateX( ' + randox+ 'px ) \
        translateY( ' + randoy+ 'px ) \
        rotateY(45deg) \
        rotateX(45deg) \
        translateZ( ' + randoz+ 'px)';
        div.style.transform = t;
        world.appendChild(div);
      } else if (i === 11) {
        var t = 'translateX( ' + randox+ 'px ) \
        translateY( ' + randoy+ 'px ) \
        rotateY(-45deg) \
        rotateX(45deg) \
        translateZ( ' + randoz+ 'px)';
        div.style.transform = t;
        world.appendChild(div);
      } else if (i === 12) {
        var t = 'translateX( ' + randox+ 'px ) \
        translateY( ' + randoy+ 'px ) \
        rotateY(45deg) \
        rotateX(-45deg) \
        translateZ( ' + randoz+ 'px)';
        div.style.transform = t;
        world.appendChild(div);
      } else if (i === 13) {
        var t = 'translateX( ' + randox+ 'px ) \
        translateY( ' + randoy+ 'px ) \
        rotateY(-45deg) \
        rotateX(-45deg) \
        translateZ( ' + randoz+ 'px)';
        div.style.transform = t;
        world.appendChild(div);
      }
      cube_array.push(div);
    }

    for( var j = 0; j < 1 + Math.round( Math.random() * 10 ); j++ ) {
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

    cloud.animation_data = Object.assign({}, cloud.data);
    var t = 'translateX( ' + cloud.data.x + 'px ) \
      translateY( ' + cloud.data.y + 'px ) \
      translateZ( ' + cloud.data.z + 'px ) \
      rotateZ( ' + cloud.data.a + 'deg ) \
      rotateX(' + cloud.data.rx+ 'deg) \
      rotateY(' + cloud.data.ry+ 'deg) \
      scale( ' + cloud.data.s + ' )';
    cloud.style.transform = t;

    world.appendChild( cloud );
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
  function random_img() {
    return Math.floor(Math.random()*images.length);
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

    world.style.transform = 'translateZ( ' + user_d + 'px ) \
    rotateX( ' + worldXAngle + 'deg) \
    rotateY( ' + worldYAngle + 'deg)';
    // for (var i=0; i<layers.length; i++) {
    //
    //   layers[i].style.transform = 'translateZ('+layers[i].data.z+(rms_copy*1000)+'px)';
    // }
    // console.log(layers);

    // crosshair.style.top = crosshairY+'px';
    //
    // crosshair.style.left = crosshairX+'px';


  }

  function onContainerMouseWheel( event ) {

  event = event ? event : window.event;
  user_d = user_d - ( event.detail ? event.detail * -5 : event.wheelDelta / 8 );
  updateView();
  event.preventDefault();
}

// function removeDiv (event) {
//   console.log(event);
//   event.target.parentNode.removeChild(event.target);
// }

length = 0;
function update(){
  worldXAngle += -rms_copy*2;
  worldYAngle += 1+rms_copy*5;
  d = rms_copy*10;
  for( var j = 0; j < layers.length; j++) {
    var layer = layers[ j ];
    layer.data.a += layer.data.s;
    var t = 'translateX( ' + layer.data.x + 'px ) translateY( ' + layer.data.y + 'px ) translateZ( ' + layer.data.z + 'px ) rotateX('+layer.data.rx+'deg) rotateY('+layer.data.ry+'deg) rotateZ( ' + layer.data.a + 'deg ) scale( ' + layer.data.s + ')';
    layer.style.webkitTransform = t;
    layer.style.MozTransform = t;
    layer.style.oTransform = t;
  }
  length += .5;

  for(var i = 0; i<cube_array.length; i++) {
    var ztranslation = cube_array[i].data.z + (high_copy*40);
    if(i%14 === 0) {

      cube_array[i].style.webkitTransform = 'translateX( ' + cube_array[i].data.x+ 'px ) \
      translateY( ' + cube_array[i].data.y+ 'px ) \
      translateZ( ' +ztranslation+ 'px)';
    } else if(i%14 === 1) {

      cube_array[i].style.webkitTransform = 'translateX( ' + cube_array[i].data.x+ 'px ) \
      translateY( ' + cube_array[i].data.y+ 'px ) \
      rotateX(180deg) \
      translateZ( ' +ztranslation+ 'px)';
    } else if(i%14 === 2) {

      cube_array[i].style.webkitTransform = 'translateX( ' + cube_array[i].data.x+ 'px ) \
      translateY( ' + cube_array[i].data.y+ 'px ) \
      rotateX(90deg) \
      translateZ( ' +ztranslation+ 'px)';
    } else if(i%14 === 3) {

      cube_array[i].style.webkitTransform = 'translateX( ' + cube_array[i].data.x+ 'px ) \
      translateY( ' + cube_array[i].data.y+ 'px ) \
      rotateX(-90deg) \
      translateZ( ' +ztranslation+ 'px)';
    } else if(i%14 === 4) {

      cube_array[i].style.webkitTransform = 'translateX( ' + cube_array[i].data.x+ 'px ) \
      translateY( ' + cube_array[i].data.y+ 'px ) \
      rotateY(90deg) \
      translateZ( ' +ztranslation+ 'px)';
    } else if(i%14 === 5) {

      cube_array[i].style.webkitTransform = 'translateX( ' + cube_array[i].data.x+ 'px ) \
      translateY( ' + cube_array[i].data.y+ 'px ) \
      rotateY(-90deg) \
      translateZ( ' +ztranslation+ 'px)';
    } else if(i%14 === 6) {

      cube_array[i].style.webkitTransform = 'translateX( ' + cube_array[i].data.x+ 'px ) \
      translateY( ' + cube_array[i].data.y+ 'px ) \
      rotateY(45deg) \
      rotateX(45deg) \
      translateZ( ' +ztranslation+ 'px)';
    } else if(i%14 === 7) {

      cube_array[i].style.webkitTransform = 'translateX( ' + cube_array[i].data.x+ 'px ) \
      translateY( ' + cube_array[i].data.y+ 'px ) \
      rotateY(-45deg) \
      rotateX(45deg) \
      translateZ( ' +ztranslation+ 'px)';
    } else if(i%14 === 8) {

      cube_array[i].style.webkitTransform = 'translateX( ' + cube_array[i].data.x+ 'px ) \
      translateY( ' + cube_array[i].data.y+ 'px ) \
      rotateY(45deg) \
      rotateX(-45deg) \
      translateZ( ' +ztranslation+ 'px)';
    } else if(i%14 === 9) {

      cube_array[i].style.webkitTransform = 'translateX( ' + cube_array[i].data.x+ 'px ) \
      translateY( ' + cube_array[i].data.y+ 'px ) \
      rotateY(-45deg) \
      rotateX(-45deg) \
      translateZ( ' +ztranslation+ 'px)';
    } else if(i%14 === 10) {

      cube_array[i].style.webkitTransform = 'translateX( ' + cube_array[i].data.x+ 'px ) \
      translateY( ' + cube_array[i].data.y+ 'px ) \
      rotateY(45deg) \
      rotateX(45deg) \
      translateZ( ' +ztranslation+ 'px)';
    } else if(i%14 === 11) {

      cube_array[i].style.webkitTransform = 'translateX( ' + cube_array[i].data.x+ 'px ) \
      translateY( ' + cube_array[i].data.y+ 'px ) \
      rotateY(-45deg) \
      rotateX(45deg) \
      translateZ( ' +ztranslation+ 'px)';
    } else if(i%14 === 12) {

      cube_array[i].style.webkitTransform = 'translateX( ' + cube_array[i].data.x+ 'px ) \
      translateY( ' + cube_array[i].data.y+ 'px ) \
      rotateY(45deg) \
      rotateX(-45deg) \
      translateZ( ' +ztranslation+ 'px)';
    } else if(i%14 === 13) {

      cube_array[i].style.webkitTransform = 'translateX( ' + cube_array[i].data.x+ 'px ) \
      translateY( ' + cube_array[i].data.y+ 'px ) \
      rotateY(-45deg) \
      rotateX(-45deg) \
      translateZ( ' +ztranslation+ 'px)';}
  }
  requestAnimationFrame( update );

}

update();
displaySound = function(url = 'audio/House No. 2.mp3'){
  if(audio_copy) {
    audio_copy.pause();
  }
  // var url = 'German Clap.mp3'
    var ctx = new AudioContext()
    , audio = new Audio(url)
    // 2048 sample buffer, 1 channel in, 1 channel out
    , processor = ctx.createScriptProcessor(2048, 1, 1)
    , analyser = ctx.createAnalyser()
    , source
    var bufferLength = analyser.frequencyBinCount;
    frequency_data = new Float32Array(bufferLength);
    audio_copy = audio;

  audio.addEventListener('canplaythrough', function(){
    var source = ctx.createMediaElementSource(audio)
    source.connect(processor)
    source.connect(analyser)
    source.connect(ctx.destination)
    processor.connect(ctx.destination)
    audio.play()
  }, false);


  // loop through PCM data and calculate average
  // volume for a given 2048 sample buffer
  var length = 0;
  processor.onaudioprocess = function(evt){

    analyser.getFloatFrequencyData(frequency_data);
    var low = 0;
    for(var i=0; i<100; i++) {
      low += frequency_data[i];
    }
    low = low/100;
    var mid = 0;
    for(var i=100; i<300; i++) {
      mid += frequency_data[i];
    }
    mid = mid/200;
    var high = 0;
    for(var i=300; i<600; i++) {
      high += frequency_data[i];
    }
    high = high/300 ;

    low_meter.style.width = 100+low+'%';
    mid_meter.style.width = 100+mid+'%';
    high_meter.style.width = 100+high+'%';

    low_copy = low+100;
    mid_copy = mid+100;
    high_copy = high+100;



    var input = evt.inputBuffer.getChannelData(0)
      , len = input.length
      , total = i = 0
      , rms
    while ( i < len ) total += Math.abs( input[i++] )
    rms = Math.sqrt( total / len )
    for(var i = 0; i<layers.length; i++) {
      layers[i].data.s = layers[i].animation_data.s + rms*4;
    }
    rms_copy = rms;
    console.log(rms);
    if (rms > .5) {
      for(var i = 0; i<layers.length; i++) {
        layers[i].style.backgroundImage = "url('images/"+images[random_img()]+"')";
      }
    }
    if (rms < .2) {
      for(var i = 0; i<layers.length; i++) {
        layers[i].style.backgroundImage = "url('images/horse.png')";
      }
    }

  }

}
displaySound();




setInterval(function() {
  updateView();
}, 5);

// Drag and Drop

window.addEventListener('drop', onDrop, false);
    window.addEventListener('dragover', onDrag, false);

    function onDrag(e) {
        e.stopPropagation();
        e.preventDefault();
        document.getElementById('notification').className+=' hidden';
        return false;
    }

    function onDrop(e) {
        e.stopPropagation();
        e.preventDefault();
        var droppedFiles = e.dataTransfer.files;
        url = URL.createObjectURL(droppedFiles[0]); // sets the audio source to the dropped file
        displaySound(url);
        console.log('hello');
    }
});
