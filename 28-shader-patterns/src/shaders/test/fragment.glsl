varying vec2 vUv;

float random (vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

vec2 rotate(vec2 uv, float rotation, vec2 mid)
{
    return vec2(
      cos(rotation) * (uv.x - mid.x) + sin(rotation) * (uv.y - mid.y) + mid.x,
      cos(rotation) * (uv.y - mid.y) - sin(rotation) * (uv.x - mid.x) + mid.y
    );
}

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

    // // Pattern 21
    // float strength = random(vUv);
    // vec4 pattern = vec4(vec3(strength), 1.0);

    // // Pattern 22
    // vec2 gridUv = vec2(floor(vUv.x * 10.0) / 10.0, floor(vUv.y * 10.0) / 10.0);
    // float strength = random(gridUv);
    // vec4 pattern = vec4(vec3(strength), 1.0);

    // // Pattern 23
    // vec2 gridUv = vec2(floor(vUv.x * 10.0) / 10.0, floor((vUv.y + vUv.x * 0.5) * 10.0) / 10.0);
    // float strength = random(gridUv);
    // vec4 pattern = vec4(vec3(strength), 1.0);

    // // Pattern 24
    // float strength = length(vUv);
    // vec4 pattern = vec4(vec3(strength), 1.0);

    // // Pattern 25
    // float strength = distance(vUv, vec2(0.5));
    // vec4 pattern = vec4(vec3(strength), 1.0);

    // // Pattern 26
    // float strength = 1.0 - distance(vUv, vec2(0.5));
    // vec4 pattern = vec4(vec3(strength), 1.0);

    // // Pattern 27
    // float strength = 0.015 / distance(vUv, vec2(0.5));
    // vec4 pattern = vec4(vec3(strength), 1.0);

    // // Pattern 28
    // float strength = 0.015 / distance(vec2(vUv.x * 0.1 + 0.45, vUv.y * 0.5 + 0.25), vec2(0.5));
    // vec4 pattern = vec4(vec3(strength), 1.0);

    // // Pattern 29
    // float lightX = 0.015 / distance(vec2(vUv.x * 0.1 + 0.45, vUv.y * 0.5 + 0.25), vec2(0.5));
    // float lightY = 0.015 / distance(vec2(vUv.y * 0.1 + 0.45, vUv.x * 0.5 + 0.25), vec2(0.5));
    // float strength = lightX * lightY;
    // vec4 pattern = vec4(vec3(strength), 1.0);

    // Pattern 29
    float lightX = 0.015 / distance(vec2(vUv.x * 0.1 + 0.45, vUv.y * 0.5 + 0.25), vec2(0.5));
    float lightY = 0.015 / distance(vec2(vUv.y * 0.1 + 0.45, vUv.x * 0.5 + 0.25), vec2(0.5));
    float strength = lightX * lightY;
    vec4 pattern = vec4(vec3(strength), 1.0);

    gl_FragColor = vec4(pattern);
}