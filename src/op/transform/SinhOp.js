import TransformOp from "./TransformOp";

export default class SinhOp extends TransformOp {
  
  body(a, b) {
    return Math.sinh(a);
  }

}