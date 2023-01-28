import { DirectionalLight } from 'three';

function createDirectionalLight() {

    const light = new DirectionalLight( 0xffffff, 2 );

    return light;

}

export { createDirectionalLight };