// Module for setting 3x3 matrix values

// Axis-angle rotation matrix using the right hand rule
glQueryMath.matrix3.newAxisRotation = function(axis, angle) {
  var
  // Convert rotation to quaternion representation
  length = Math.sqrt(axis[0]*axis[0], axis[1]*axis[1], axis[2]*axis[2]),
  halfAngle = angle * 0.5,
  sinHalfOverLength = Math.sin(halfAngle) / length,
  x = axis[0] * sinHalfOverLength,
  y = axis[1] * sinHalfOverLength,
  z = axis[2] * sinHalfOverLength,
  w = Math.cos(halfAngle),
  // Convert quaternion to matrix representation
  xx = x*x, xy = x*y, xz = x*z, xw = x*w,
  yy = y*y, yz = y*z, yw = y*w,
  zz = z*z, zw = z*w;
  return [
    1 - 2 * (yy + zz), 2 * (xy + zw),     2 * (xz - yw),
    2 * (xy - zw),     1 - 2 * (xx + zz), 2 * (yz + xw),
    2 * (xz + yw),     2 * (yz - xw),     1 - 2 * (xx + yy)];
};

// Matrix identity
glQueryMath.matrix3.newIdentity = function() {
  return [
    1.0, 0.0, 0.0,
    0.0, 1.0, 0.0,
    0.0, 0.0, 1.0];
};
