import Tensor from "./Tensor";
import TensorMath from "./TensorMath";
import ShapeUtils from "./util/ShapeUtils";
import TensorUtils from "./util/TensorUtils";

export {
  Tensor,
  TensorMath,
  ShapeUtils,
  TensorUtils
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