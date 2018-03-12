import TransformOp from "./TransformOp";

export default class CosOp extends TransformOp {

  body(a, b) {
    return Math.cos(a);
  }

}