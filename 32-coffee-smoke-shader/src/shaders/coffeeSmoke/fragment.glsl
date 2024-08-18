uniform sampler2D uPerlinTexture;

varying vec2 vUv;

void main(){
    // Smoke
    float smoke = texture(uPerlinTexture, vUv).r;


    gl_FragColor = vec4(1.0, 1.0, 1.0, smoke);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}