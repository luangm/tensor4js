import TransformOp from "./TransformOp";

export default class ReluOp extends TransformOp {

  body(a, b) {
    return a > 0 ? a : 0;
  }

}