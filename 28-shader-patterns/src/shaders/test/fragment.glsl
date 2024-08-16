varying vec2 vUv;

void main()
{
    // // Pattern 1
    // vec4 pattern = vec4(vUv, 1.0, 1.0);

    // // Pattern 2
    // vec4 pattern = vec4(vUv, 0.0, 1.0);

    // // Pattern 3
    // vec4 pattern = vec4(vec3(vUv.x), 1.0);

    // // Pattern 4
    // vec4 pattern = vec4(vec3(vUv.y), 1.0);

    // // Pattern 5
    // vec4 pattern = vec4(vec3(1.0 - vUv.y), 1.0);

    // // Pattern 6
    // vec4 pattern = vec4(vec3(10.0 * vUv.y), 1.0);

    // Pattern 6
    vec4 pattern = vec4(vec3(mod(10.0 * vUv.y, 1.0)), 1.0);

    gl_FragColor = vec4(pattern);
}