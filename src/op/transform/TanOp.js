import TransformOp from "./TransformOp";

export default class TanOp extends TransformOp {

  body(a, b) {
    return Math.tan(a);
  }

}