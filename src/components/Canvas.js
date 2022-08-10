import React, { useEffect, useRef } from "react";
import './Canvas.scss';

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function Canvas(props) {

  const mountRef = useRef(null);

  useEffect(() => {
    var scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xdddddd );
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer({ antialias: true });
    
    renderer.setSize( window.innerWidth, window.innerHeight );

    mountRef.current.appendChild( renderer.domElement );

    // group declarations
    const spinnerGroup = new THREE.Group();

    // head model
    var loader = new GLTFLoader();
    loader.load('models/menu_spinner_shell.gltf', function(gltf) {
      var object = gltf.scene;
      
      // object.rotation.x -= 0.07; // adjust rotation for imported model (blender issue)
      spinnerGroup.add( object );
    });

    scene.add(spinnerGroup);


    const hemiLight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 1.5);
    

    // const hemiLight = new THREE.HemisphereLight( 0x0000ff, 0x00ff00, 3 );
    scene.add(hemiLight);

    const light = new THREE.DirectionalLight( 0xFFFFFF, 0.5 );
    light.position.set(0, 0, 0);
    scene.add( light );


    scene.add(new THREE.AxesHelper(500));
    const controls = new OrbitControls( camera, renderer.domElement );
    
    // var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    // var material = new THREE.MeshBasicMaterial( { color: 'red' } );
    // var cube = new THREE.Mesh( geometry, material );
    
    // scene.add( cube );
    camera.position.z = 5;
    
    var animate = function () {
      requestAnimationFrame( animate );
      spinnerGroup.rotation.x += 0.01;
      spinnerGroup.rotation.y += 0.01;
      renderer.render( scene, camera );
    };

    let onWindowResize = function () {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize( window.innerWidth, window.innerHeight );
    }

    window.addEventListener("resize", onWindowResize, false);
    
    animate();

    return () => mountRef.current.removeChild( renderer.domElement );
  }, []);

  return (
      <div className='menu-3d' ref={mountRef}></div>
  );
}