import {OrbitControls} from 'three/addons/controls/OrbitControls.js'

function createController(camera, canvas) {
    controls = new OrbitControls( camera, canvas );
    controls.target.set( 0, 10, 0 );
    controls.update();
        
    controls.tick = () => controls.update();

    return controls;
}

export { createController };