import TransformOp from "./TransformOp";

export default class SqrtOp extends TransformOp {

  body(a, b) {
    return Math.sqrt(a);
  }

}