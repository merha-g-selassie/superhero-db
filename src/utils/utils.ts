export const isInstanceOfError = (object: unknown): boolean =>
  Object.prototype.hasOwnProperty.call(object, 'code') &&
  Object.prototype.hasOwnProperty.call(object, 'message');
