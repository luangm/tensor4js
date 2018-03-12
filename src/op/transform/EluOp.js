import TransformOp from "./TransformOp";

export default class Elu extends TransformOp {

  body(a, b) {
    return a > 0 ? a : Math.expm1(a);
  }

}