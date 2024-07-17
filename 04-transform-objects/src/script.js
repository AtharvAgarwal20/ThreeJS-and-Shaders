import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')



// Scene
const scene = new THREE.Scene()



// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// POSITION
// mesh.position.normalize()
// mesh.position.x = 0.7
// mesh.position.y = -0.6
// mesh.position.z = 1
mesh.position.set(0.7, -0.6, 1)

// SCALE
mesh.scale.set(2, 0.5, 0.5)

// ROTATION
mesh.rotation.reorder('YXZ')
mesh.rotation.x = Math.PI / 4
mesh.rotation.y = Math.PI / 4

console.log(mesh.position.length())                                     // Distance between center of scene and object
console.log(mesh.position.distanceTo(new THREE.Vector3(0, 1, 2)))       // Distance between any point and object



// Sizes
const sizes = {
    width: 800,
    height: 600
}



// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

camera.lookAt(mesh.position)

console.log(mesh.position.distanceTo(camera.position))



// Axes Helper
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)



// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)