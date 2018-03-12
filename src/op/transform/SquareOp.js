import TransformOp from "./TransformOp";

export default class SquareOp extends TransformOp {

  body(a, b) {
    return a * a;
  }

}