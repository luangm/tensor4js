import TransformOp from "./TransformOp";

export default class CoshOp extends TransformOp {

  body(a, b) {
    return Math.cosh(a);
  }

}