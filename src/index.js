import Tensor from "./Tensor";
import TensorMath from "./TensorMath";

export {
  Tensor,
  TensorMath
}

export function println(...array) {
  let result = [];
  for (let obj of array) {
    if (obj instanceof Tensor) {
      result.push(obj.toString());
    } else {
      result.push(obj);
    }
  }
  console.log(...result);
}