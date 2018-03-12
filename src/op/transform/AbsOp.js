import TransformOp from "./TransformOp";

export default class AbsOp extends TransformOp {

  body(a, b) {
    return Math.abs(a);
  }

}