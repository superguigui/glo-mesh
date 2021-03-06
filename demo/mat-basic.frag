precision mediump float;

varying vec2 vUv;
varying vec3 vNormal;
uniform sampler2D iChannel0;
uniform vec2 repeat;

void main() {
  gl_FragColor = texture2D(iChannel0, vUv * repeat);
  // gl_FragColor = vec4(vec3(0.5), 1.0);
}