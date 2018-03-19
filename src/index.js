import Tensor from "./Tensor";
import TensorMath from "./TensorMath";
import ShapeUtils from "./util/ShapeUtils";
import TensorUtils from "./util/TensorUtils";
import ArrayUtils from "./util/ArrayUtils";

export {
  Tensor,
  TensorMath,
  ShapeUtils,
  TensorUtils,
  ArrayUtils
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