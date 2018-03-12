import TransformOp from "./TransformOp";

export default class AsinhOp extends TransformOp {

  body(a, b) {
    return Math.asinh(a);
  }

}