import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'

const gui = new GUI()

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Textures
const loadingManager = new THREE.LoadingManager()

loadingManager.onStart = () => {
    console.log("Started loading")
}

loadingManager.onError = (err) => {
    console.log(err)
}

loadingManager.onLoad = () => {
    console.log("textures loaded")
}

const textureLoader = new THREE.TextureLoader(loadingManager)

const doorColorTexture = textureLoader.load('/textures/door/color.jpg')
const doorAlphaTexture = textureLoader.load('/textures/door/alpha.jpg')
const doorAmbientOcclusionTexture = textureLoader.load('/textures/door/ambientOcclusion.jpg')
const doorHeightTexture = textureLoader.load('/textures/door/height.jpg')
const doorNormalTexture = textureLoader.load('/textures/door/normal.jpg')
const doorMetalnessTexture = textureLoader.load('/textures/door/metalness.jpg')
const doorRoughnessTexture = textureLoader.load('/textures/door/roughness.jpg')
const matcapTexture = textureLoader.load('/textures/matcaps/1.png')
const gradientTexture = textureLoader.load('/textures/gradients/5.jpg')

doorColorTexture.colorSpace = THREE.SRGBColorSpace
matcapTexture.colorSpace = THREE.SRGBColorSpace

// GUI
const materialTweaks = gui.addFolder('Material Properties')

// // MeshBasicMaterial
// const material = new THREE.MeshBasicMaterial()
// material.map = doorColorTexture
// material.color = new THREE.Color(0xff0000)
// material.wireframe = true
// material.transparent = true
// material.opacity = 0.5
// material.alphaMap = doorAlphaTexture
// material.side = THREE.DoubleSide

// // MeshNormalMaterial
// const material = new THREE.MeshNormalMaterial()
// material.flatShading = true

// // MeshMatcapMaterial
// const material = new THREE.MeshMatcapMaterial()
// material.matcap = matcapTexture

// // MeshDepthMaterial
// const material = new THREE.MeshDepthMaterial()

// // MeshLambertMaterial
// const material = new THREE.MeshLambertMaterial()

// // MeshPhongMaterial
// const material = new THREE.MeshPhongMaterial()
// material.shininess = 100
// material.specular = new THREE.Color(0x1188ff)

// // MeshToonMaterial
// const material = new THREE.MeshToonMaterial()
// gradientTexture.magFilter = THREE.NearestFilter
// gradientTexture.minFilter = THREE.NearestFilter
// gradientTexture.generateMipmaps = false
// material.gradientMap = gradientTexture

// // MeshStandardMaterial
// const material = new THREE.MeshStandardMaterial()
// material.metalness = 1
// material.roughness = 1
// material.side = THREE.DoubleSide
// materialTweaks.add(material, 'metalness').min(0).max(1).step(0.0001)
// materialTweaks.add(material, 'roughness').min(0).max(1).step(0.0001)

// material.map = doorColorTexture
// material.aoMap = doorAmbientOcclusionTexture
// material.displacementMap = doorHeightTexture
// material.displacementScale = 0.1
// material.metalnessMap = doorMetalnessTexture
// material.roughnessMap = doorRoughnessTexture
// material.normalMap = doorNormalTexture
// material.normalScale.set(0.5, 0.5)
// material.transparent = true
// material.alphaMap = doorAlphaTexture

// MeshPhysicalMaterial
const material = new THREE.MeshPhysicalMaterial()
material.metalness = 1
material.roughness = 1
material.side = THREE.DoubleSide
materialTweaks.add(material, 'metalness').min(0).max(1).step(0.0001)
materialTweaks.add(material, 'roughness').min(0).max(1).step(0.0001)

material.map = doorColorTexture
material.aoMap = doorAmbientOcclusionTexture
material.displacementMap = doorHeightTexture
material.displacementScale = 0.1
material.metalnessMap = doorMetalnessTexture
material.roughnessMap = doorRoughnessTexture
material.normalMap = doorNormalTexture
material.normalScale.set(0.5, 0.5)
material.transparent = true
material.alphaMap = doorAlphaTexture

// // Clearcoat
// material.clearcoat = 1
// material.clearcoatRoughness = 0

// materialTweaks.add(material, 'clearcoat').min(0).max(1).step(0.0001)
// materialTweaks.add(material, 'clearcoatRoughness').min(0).max(1).step(0.0001)

// // Sheen
// material.sheen = 1
// material.sheenRoughness = 0.25
// material.sheenColor.set(1, 1, 1)

// materialTweaks.add(material, 'sheen').min(0).max(1).step(0.0001)
// materialTweaks.add(material, 'sheenRoughness').min(0).max(1).step(0.0001)
// materialTweaks.addColor(material, 'sheenColor')

// // Iridescence
// material.iridescence = 1
// material.iridescenceIOR = 1
// material.iridescenceThicknessRange = [100, 800]

// materialTweaks.add(material, 'iridescence').min(0).max(1).step(0.0001)
// materialTweaks.add(material, 'iridescenceIOR').min(1).max(2.333).step(0.0001)
// materialTweaks.add(material.iridescenceThicknessRange, '0').min(1).max(1000).step(1)
// materialTweaks.add(material.iridescenceThicknessRange, '1').min(1).max(1000).step(1)

// Transmission
material.transmission = 1
material.ior = 1.5
material.thickness = 0.5

materialTweaks.add(material, 'transmission').min(0).max(1).step(0.0001)
materialTweaks.add(material, 'ior').min(1).max(2.333).step(0.0001)
materialTweaks.add(material, 'thickness').min(0).max(1).step(0.0001)


// Object
const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.5, 64, 64), material)
const plane = new THREE.Mesh(new THREE.PlaneGeometry(1, 1, 100, 100), material)
const torus = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.2, 64, 128), material)

sphere.position.x = -1.5
torus.position.x = 1.5

scene.add(sphere, torus, plane)

// // Lights
// const ambientLight = new THREE.AmbientLight(0xffffff, 1)
// scene.add(ambientLight)

// const pointLight = new THREE.PointLight(0xffffff, 30)
// pointLight.position.x = 2
// pointLight.position.y = 3
// pointLight.position.z = 4
// scene.add(pointLight)

// Environment Map
const rgbeLoader = new RGBELoader()
rgbeLoader.load('/textures/environmentMap/2k.hdr', (environmentMap) => {
    environmentMap.mapping = THREE.EquirectangularReflectionMapping
    scene.background = environmentMap
    scene.environment = environmentMap
})

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
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 2
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () => {
    const elapsedTime = clock.getElapsedTime()

    // Rotations
    sphere.rotation.y = 0.1 * elapsedTime
    plane.rotation.y = 0.1 * elapsedTime
    torus.rotation.y = 0.1 * elapsedTime

    sphere.rotation.x = -0.15 * elapsedTime
    plane.rotation.x = -0.15 * elapsedTime
    torus.rotation.x = -0.15 * elapsedTime

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()