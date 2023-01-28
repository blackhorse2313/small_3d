import { createRenderer } from "./systems/renderer.js";
import { createCamera } from "./components/camera.js";
import { createScene } from "./components/scene.js";
import { BoxGeometry, Mesh, MeshBasicMaterial, MeshPhongMaterial } from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { createDirectionalLight } from './components/light.js';

let renderer;
let camera, camera_1, camera_2, camera_3;
let scene;
let cameraControls;
let cube;
let light;

let controls = {

    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false

};
class World {

    constructor(container) {
        
        renderer = createRenderer();
        const cameras = createCamera(window.innerWidth, window.innerHeight);
        camera = cameras.camera;
        camera_1 = cameras.camera_1;
        camera_2 = cameras.camera_2;
        camera_3 = cameras.camera_3;

        scene.add(camera_1);
        scene.add(camera_2);
        scene.add(camera_3);

        scene = createScene();

        light = createDirectionalLight();
        light.position.set(3, 10, 10);
        scene.add(light);

        container.appendChild(renderer.domElement);

        //make cube mesh
        const geometry = new BoxGeometry(5, 10, 7);
        const material = new MeshBasicMaterial({ color: 'purple'});
        cube = new Mesh(geometry, material);

        //set cube position and add it to scene
        cube.position.set(0, 0, 0);
        scene.add(cube);
        cameraControls = new OrbitControls( camera, renderer.domElement );
        cameraControls.target.set( 0, 0, 0 );
        cameraControls.update();
		cameraControls.addEventListener( 'change', this.render );

        document.addEventListener( 'keydown', this.onKeyDown );
        document.addEventListener( 'keydown', this.render );
		document.addEventListener( 'keyup', this.onKeyUp );
    
    }


    onKeyDown( event ) {

        switch ( event.code ) {

            case 'ArrowUp':
            case 'KeyW':
                cube.position.x += 1
                controls.moveForward = true; 
                break;
                // cube.position.setX(cube.position.x + 100);
            break;

            case 'ArrowDown':
            case 'KeyS': controls.moveBackward = true; cube.position.x -= 1; break;
            

            case 'ArrowLeft':
            case 'KeyA': controls.moveLeft = true; cube.position.y += 1;break;

            case 'ArrowRight':
            case 'KeyD': controls.moveRight = true; cube.position.y -= 1;break;

            // case 'KeyC': controls.crouch = true; break;
            // case 'Space': controls.jump = true; break;
            // case 'ControlLeft':
            // case 'ControlRight': controls.attack = true; break;

        }

        // let requestId = requestAnimationFrame(() => { this.render; });

    }

    onKeyUp( event ) {

        switch ( event.code ) {

            case 'ArrowUp':
            case 'KeyW': controls.moveForward = false; break;

            case 'ArrowDown':
            case 'KeyS': controls.moveBackward = false; break;

            case 'ArrowLeft':
            case 'KeyA': controls.moveLeft = false; break;

            case 'ArrowRight':
            case 'KeyD': controls.moveRight = false; break;

            // case 'KeyC': controls.crouch = false; break;
            // case 'Space': controls.jump = false; break;
            // case 'ControlLeft':
            // case 'ControlRight': controls.attack = false; break;

        }

    }
    
    render() {

        let SCREEN_WIDTH = window.innerWidth;
	    let SCREEN_HEIGHT = window.innerHeight;
        renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );

        renderer.clear();

        renderer.setViewport( SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2 );
        renderer.render(scene, camera);

        renderer.setViewport( 0, SCREEN_HEIGHT / 2, SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2);
        renderer.render(scene, camera_1);

        renderer.setViewport( 0, 0, SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2 );
        renderer.render(scene, camera_2);

        renderer.setViewport( SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2, SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2);
        renderer.render(scene, camera_3);

        // requestAnimationFrame(renderer);
    }

    // animate() {

    //     requestAnimationFrame( animate );
    
    //     // required if controls.enableDamping or controls.autoRotate are set to true
    //     cameraControls.update();
    
    //     render();
    
    // }
}

export { World };