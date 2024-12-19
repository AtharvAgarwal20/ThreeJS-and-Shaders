uniform float uTime;

varying vec3 vPosition;

void main(){
    // Stripes
    float stripes = pow(mod((vPosition.y - uTime * 0.02) * 20.0, 1.0), 3.0);

    gl_FragColor = vec4(1.0, 1.0, 1.0, stripes);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}