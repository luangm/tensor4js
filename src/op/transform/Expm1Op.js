import TransformOp from "./TransformOp";

export default class Expm1Op extends TransformOp {

  body(a, b) {
    return Math.expm1(a);
  }

}