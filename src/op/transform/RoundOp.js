import TransformOp from "./TransformOp";

export default class RoundOp extends TransformOp {

  body(a, b) {
    return Math.round(a);
  }

}