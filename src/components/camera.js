import { PerspectiveCamera, OrthographicCamera } from 'three';

function createCamera(width, height) {
    const camera = new PerspectiveCamera(
        60, // fov
        0.5, //aspect
        0.1, //near
        10000 // far
    );

    const camera_1 = new OrthographicCamera(
        0,
        width,
        0,
        height,
        -1,
        1
    );

    const camera_2 = new OrthographicCamera(
        0,
        width,
        0,
        height,
        -1,
        1
    );

    const camera_3 = new OrthographicCamera(
        0,
        width,
        0,
        height,
        -1,
        1
    );

    //move the camera back so we can view the scene
    camera.position.set(0, 0, 60);
    // camera_1.position.set(0, 0, 20);

    // camera_2.position.set(0, 20, 0);
    // camera_2.rotateX(-Math.PI / 2);

    // camera_3.position.set(20, 0, 0);
    // camera_3.rotateY(Math.PI / 2);

    return { camera, camera_1, camera_2, camera_3 };
}

export { createCamera };