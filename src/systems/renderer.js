import { WebGLRenderer } from 'three';

function createRenderer() {

    const renderer = new WebGLRenderer();

    // renderer.autoClear = false;

    renderer.physicallyCorrectLights = true;
    renderer.setPixelRatio( window.devicePixelRatio );
	
    return renderer;

}

export { createRenderer };