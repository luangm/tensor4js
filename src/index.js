import Tensor from "./Tensor";

export {
  Tensor
}

export function println(...array) {
  let result = [];
  for (let obj of array) {
    if (obj instanceof Tensor || obj instanceof Expression) {
      result.push(obj.toString());
    } else {
      result.push(obj);
    }
  }
  console.log(...result);
}