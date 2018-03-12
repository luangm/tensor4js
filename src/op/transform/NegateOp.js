import TransformOp from "./TransformOp";

export default class NegateOp extends TransformOp {

  body(a, b) {
    return -a;
  }

}