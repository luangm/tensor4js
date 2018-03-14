import TransformOp from "./TransformOp";

export default class EluOp extends TransformOp {

  body(a, b) {
    return a > 0 ? a : Math.expm1(a);
  }

}