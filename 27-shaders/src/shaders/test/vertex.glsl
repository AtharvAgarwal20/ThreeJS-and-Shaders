uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

attribute vec3 position;

void main() {
    // vec3 bar = vec3(1.0, 2.0, 3.0);
    // bar.x = 2.0;
    // bar.y = 3.0;
    // bar.z = 4.0;

    // vec3 color = vec3(1.0, 2.0, 3.0);
    // color.r = 2.0;
    // color.g = 3.0;
    // color.b = 4.0;

    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}