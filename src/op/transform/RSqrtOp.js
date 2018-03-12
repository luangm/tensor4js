import TransformOp from "./TransformOp";

export default class RSqrtOp extends TransformOp {

  body(a, b) {
    return 1 / Math.sqrt(a);
  }

}