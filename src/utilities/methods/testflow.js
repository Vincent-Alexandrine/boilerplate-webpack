// @flow

function foo(x: ?number): string | number {
  if (x) {
    return x;
  }
  return 'nope';
}
