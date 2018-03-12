import TransformOp from "./TransformOp";

export default class SignOp extends TransformOp {

  body(a, b) {
    return Math.sign(a);
  }

}