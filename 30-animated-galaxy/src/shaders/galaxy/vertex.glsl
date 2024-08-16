uniform float uTime;
uniform float uSize;

attribute float aScale;

varying vec3 vColor;

void main(){
    /**
     *  Position
     */
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    // Spin
    float angle = atan(modelPosition.x, modelPosition.z);
    float distToCenter = length(modelPosition.xz);
    float angleOffset = (1.0 / distToCenter) * uTime * 0.2;
    angle += angleOffset;
    modelPosition.x = cos(angle) * distToCenter;
    modelPosition.z = sin(angle) * distToCenter;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;

    /**
     *  Position
     */
    gl_PointSize = uSize * aScale;
    gl_PointSize *= (1.0 / - viewPosition.z);

    vColor = color;
}