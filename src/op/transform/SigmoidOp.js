import TransformOp from "./TransformOp";

export default class SigmoidOp extends TransformOp {

  body(a, b) {
    return 1 / (1 + Math.exp(-a));
  }

}