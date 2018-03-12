import TransformOp from "./TransformOp";

export default class SqrtGradOp extends TransformOp {

  body(a, b) {
    return 1 / 2 / Math.sqrt(a);
  }

}