import {Tensor} from '../src/index.js';

test('reshape up', function() {
  let x = Tensor.create([1,2,3]); // 3 vector
  let z = x.reshape([1, 3]); // 1 x 3 matrix
  console.log(x);
  console.log(z);
});