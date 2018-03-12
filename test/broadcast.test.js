import Tensor from "../src/Tensor";
import TensorUtils from "../src/util/TensorUtils";

test('Broadcast Shapes - different size', function() {
  let a = [2, 3];
  let b = [1, 2, 1];
  let result = TensorUtils.broadcastShapes(a, b);
  expect(result).toEqual([1, 2, 3]);
});

test('Broadcast Shapes - Same Size', function() {
  let a = [1, 2];
  let b = [2, 1];
  let result = TensorUtils.broadcastShapes(a, b);
  expect(result).toEqual([2, 2]);
});

test('should show error', function() {
  let a = [2, 3];
  let b = [2, 2];
  expect(function() {
    let result = TensorUtils.broadcastShapes(a, b);
  }).toThrow();
});

test('broadcast tensor', function() {
  let a = new Tensor({data: [1, 2], shape: [1, 2]});
  let z = a.broadcast([3, 2]);
  let expected = Tensor.create([[1, 2], [1, 2], [1, 2]]);
  expect(z).toEqual(expected);
});