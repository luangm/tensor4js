import {Tensor} from '../src/index.js';

test('reshape vector to matrix', function() {
  let x = Tensor.create([1, 2, 3]); // 3 vector
  let z = x.reshape([1, 3]); // 1 x 3 matrix
  let expected = Tensor.create([[1, 2, 3]]);
  expect(z).toEqual(expected);
});

test('arange reshape', function() {
  let x = Tensor.arange(6).reshape([2,3]);
  console.log(x);

  let y = Tensor.arange(6).reshape(2, 3);
  console.log(y);

  let z = Tensor.arange(6).reshape();
  console.log(z);

  let k = Tensor.arange(6).reshape([ 1, 2, 3]);
  console.log(k);

  let s = Tensor.arange(6).reshape(1, 2, 3);
  console.log(s);
});