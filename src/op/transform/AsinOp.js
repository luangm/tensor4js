import TransformOp from "./TransformOp";

export default class AsinOp extends TransformOp {

  body(a, b) {
    return Math.asin(a);
  }

}