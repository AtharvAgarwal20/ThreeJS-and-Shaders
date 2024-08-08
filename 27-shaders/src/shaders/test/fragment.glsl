varying float vRandom;
varying vec2 vUv;

uniform vec3 uColor;
uniform sampler2D uTexture;
varying float vElevation;

void main() {
    vec4 textureColor = texture2D(uTexture, vUv);
    textureColor.rgb *= vElevation * 2.0 + 0.5;
    gl_FragColor = textureColor;
    // gl_FragColor = vec4(vRandom, vRandom * 0.1, 1.0, 1.0);
}