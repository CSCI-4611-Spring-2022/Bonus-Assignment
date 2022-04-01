import * as THREE from 'three'
import { GraphicsApp } from './GraphicsApp'

export class BonusGame extends GraphicsApp
{ 
    constructor()
    {
        // Pass in the aspect ratio to the constructor
        super(60, 1920/1080, 0.1, 1000);
    }

    createScene() : void
    {
        // Setup camera
        this.camera.position.set(0, 1.5, 3);
        this.camera.lookAt(0, 1.5, 0);
        this.camera.up.set(0, 1, 0);

        // Create an ambient light
        const ambientLight = new THREE.AmbientLight('white', 0.3);
        this.scene.add(ambientLight);

        // Create a directional light
        const directionalLight = new THREE.DirectionalLight('white', .6);
        directionalLight.position.set(0, 2, 1);
        this.scene.add(directionalLight)

        // Create the skybox material
        var skyboxMaterial = new THREE.MeshBasicMaterial();
        skyboxMaterial.side = THREE.BackSide;
        skyboxMaterial.color.set('skyblue');

        // Create a skybox
        var skybox = new THREE.Mesh(new THREE.BoxGeometry(1000, 1000, 1000), skyboxMaterial);
        this.scene.add(skybox)

        // Create a mesh for the ground
        var ground = new THREE.Mesh(
            new THREE.BoxGeometry(1000, 1, 1000), 
            new THREE.MeshLambertMaterial({color: 'green'})
        );
        ground.position.set(0, -.5, 0);
        this.scene.add(ground)
    }

    update(deltaTime : number) : void
    {
        
    }
}
