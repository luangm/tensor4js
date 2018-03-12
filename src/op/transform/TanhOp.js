import TransformOp from "./TransformOp";

export default class TanhOp extends TransformOp {

  body(a, b) {
    return Math.tanh(a);
  }

}