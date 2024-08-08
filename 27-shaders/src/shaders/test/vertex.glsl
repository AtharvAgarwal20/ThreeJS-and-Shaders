uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

uniform vec2 uFrequency;

attribute vec3 position;
attribute float aRandom;

varying float vRandom;

float loremIpsum(float a, float b){
    // float a = 1.0;
    // float b = 3.0;

    return a + b;
}

void main() {
    // vec3 bar = vec3(1.0, 2.0, 3.0);
    // bar.x = 2.0;
    // bar.y = 3.0;
    // bar.z = 4.0;

    // vec3 color = vec3(1.0, 2.0, 3.0);
    // color.r = 2.0;
    // color.g = 3.0;
    // color.b = 4.0;

    // vec2 foo = vec2(1.0, 2.0);
    // vec3 bar = vec3(foo, 3.0);
    // vec2 demo = bar.xy;

    // vec4 foo = vec4(1.0, 2.0, 3.0, 4.0);
    // float barX = foo.x;
    // float barY = foo.y;
    // float barZ = foo.z;
    // float barW = foo.w;                      // float barW = foo.a;

    float result = loremIpsum(1.0, 5.0);

    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    modelPosition.z += sin(modelPosition.x * uFrequency.x) / 10.0;
    modelPosition.z += sin(modelPosition.y * uFrequency.y) / 10.0;
    // modelPosition.z += aRandom * 0.1;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;

    // vRandom = aRandom;

    // gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}