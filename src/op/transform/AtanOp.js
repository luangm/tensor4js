import TransformOp from "./TransformOp";

export default class AtanOp extends TransformOp {

  body(a, b) {
    return Math.atan(a);
  }

}