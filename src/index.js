import Tensor from "./Tensor";
import TensorMath from "./TensorMath";
import ShapeUtils from "./util/ShapeUtils";

export {
  Tensor,
  TensorMath,
  ShapeUtils
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