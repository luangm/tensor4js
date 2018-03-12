import TransformOp from "./TransformOp";

export default class SinOp extends TransformOp {

  body(a, b) {
    return Math.sin(a);
  }

}