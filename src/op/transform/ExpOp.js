import TransformOp from "./TransformOp";

export default class ExpOp extends TransformOp {

  body(a, b) {
    return Math.exp(a);
  }

}