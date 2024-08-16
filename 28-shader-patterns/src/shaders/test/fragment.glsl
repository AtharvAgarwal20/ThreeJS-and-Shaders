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

    // // Pattern 7
    // vec4 pattern = vec4(vec3(mod(10.0 * vUv.y, 1.0)), 1.0);

    // // Pattern 8
    // float strength = step(0.5, mod(vUv.y * 10.0, 1.0));
    // vec4 pattern = vec4(vec3(strength), 1.0);

    // // Pattern 9
    // float strength = step(0.8, mod(vUv.y * 10.0, 1.0));
    // vec4 pattern = vec4(vec3(strength), 1.0);

    // // Pattern 10
    // float strength = step(0.8, mod(vUv.x * 10.0, 1.0));
    // vec4 pattern = vec4(vec3(strength), 1.0);

    // // Pattern 11
    // float strength = step(0.8, mod(vUv.x * 10.0, 1.0));
    // strength += step(0.8, mod(vUv.y * 10.0, 1.0));
    // vec4 pattern = vec4(vec3(strength), 1.0);

    // // Pattern 12
    // float strength = step(0.8, mod(vUv.x * 10.0, 1.0));
    // strength *= step(0.8, mod(vUv.y * 10.0, 1.0));
    // vec4 pattern = vec4(vec3(strength), 1.0);

    // // Pattern 13
    // float barX = step(0.4, mod(vUv.x * 10.0, 1.0));
    // barX *= step(0.8, mod(vUv.y * 10.0, 1.0));
    // float barY = step(0.8, mod(vUv.x * 10.0, 1.0));
    // barY *= step(0.4, mod(vUv.y * 10.0, 1.0));
    // float strength = barX + barY;
    // vec4 pattern = vec4(vec3(strength), 1.0);

    // // Pattern 14
    // float barX = step(0.4, mod(vUv.x * 10.0, 1.0));
    // barX *= step(0.8, mod(vUv.y * 10.0 + 0.2, 1.0));
    // float barY = step(0.8, mod(vUv.x * 10.0 + 0.2, 1.0));
    // barY *= step(0.4, mod(vUv.y * 10.0, 1.0));
    // float strength = barX + barY;
    // vec4 pattern = vec4(vec3(strength), 1.0);

    // // Pattern 15
    // float strength = abs(vUv.x - 0.5);
    // vec4 pattern = vec4(vec3(strength), 1.0);

    // // Pattern 16
    // float strength = min(abs(vUv.x - 0.5), abs(vUv.y - 0.5));
    // vec4 pattern = vec4(vec3(strength), 1.0);

    // // Pattern 17
    // float strength = step(0.2, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));
    // vec4 pattern = vec4(vec3(strength), 1.0);

    // // Pattern 18
    // float square1 = step(0.2, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));
    // float square2 = 1.0 - step(0.25, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));
    // float strength = square1 * square2;
    // vec4 pattern = vec4(vec3(strength), 1.0);

    // // Pattern 19
    // float strength = floor(vUv.x * 10.0) / 10.0;
    // vec4 pattern = vec4(vec3(strength), 1.0);

    // // Pattern 20
    // float strength = floor(vUv.x * 10.0) / 10.0;
    // strength *= floor(vUv.y * 10.0) / 10.0;
    // vec4 pattern = vec4(vec3(strength), 1.0);

    // Pattern 21
    float strength = vUv.x;
    vec4 pattern = vec4(vec3(strength), 1.0);

    gl_FragColor = vec4(pattern);
}