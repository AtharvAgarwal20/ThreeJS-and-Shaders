import * as THREE from 'three'
import GUI from 'lil-gui'

/**
 * Debug
 */
const gui = new GUI()

const parameters = {
    materialColor: '#ffeded'
}

gui.addColor(parameters, 'materialColor').onChange(() => {
    material.color.set(parameters.materialColor)
})

/**
 *  Textures
 */
const loadingManager = new THREE.LoadingManager()
loadingManager.onError = (err) => {
    console.log(err)
}
loadingManager.onLoad = () => {
    console.log('loaded')
}

const textureLoader = new THREE.TextureLoader(loadingManager)
const gradientTexture = textureLoader.load('./textures/gradients/5.jpg')
gradientTexture.minFilter = THREE.NearestFilter
gradientTexture.magFilter = THREE.NearestFilter

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 *  Meshes
 */
const objectDistance = 4

const material = new THREE.MeshToonMaterial({
    color: parameters.materialColor,
    gradientMap: gradientTexture
})
const torus = new THREE.Mesh(
    new THREE.TorusGeometry(1, 0.4, 16, 60),
    material
)
const cone = new THREE.Mesh(
    new THREE.ConeGeometry(1, 2, 32),
    material
)
const torusKnot = new THREE.Mesh(
    new THREE.TorusKnotGeometry(0.8, 0.35, 100, 16),
    material
)

torus.position.y = - objectDistance * 0
cone.position.y = - objectDistance * 1
torusKnot.position.y = - objectDistance * 2

scene.add(torus, cone, torusKnot)

const sectionMeshes = [torus, cone, torusKnot]

/**
 *  Light
 */
const directionalLight = new THREE.DirectionalLight(0xffffff, 3)
directionalLight.position.set(1, 1, 0)
gui.add(directionalLight, 'intensity').min(0).max(10).step(0.001)
scene.add(directionalLight)

const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 0.2)
scene.add(directionalLightHelper)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const cameraGroup = new THREE.Group()
scene.add(cameraGroup)
const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 6
cameraGroup.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 *  Scroll
 */
let scrollY = window.scrollY

window.addEventListener('scroll', () => {
    scrollY = window.scrollY
})

/**
 *  Cursor
 */
let cursor = {
    x: 0,
    y: 0
}

window.addEventListener('mousemove', (event) => {
    cursor = {
        x: event.clientX / sizes.width - 0.5,
        y: event.clientY / sizes.height - 0.5
    }
})


/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () => {
    const elapsedTime = clock.getElapsedTime()

    // Animate camera
    camera.position.y = -scrollY / sizes.height * objectDistance

    const parallaxX = cursor.x
    const parallaxY = - cursor.y

    cameraGroup.position.x = parallaxX
    cameraGroup.position.y = parallaxY

    // Animate meshes
    for (let mesh of sectionMeshes) {
        mesh.rotation.x = elapsedTime / 10
        mesh.rotation.y = elapsedTime / 9
    }

    torus.position.x = 2
    cone.position.x = -2
    torusKnot.position.x = 2

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()