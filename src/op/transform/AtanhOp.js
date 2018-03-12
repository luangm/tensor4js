import TransformOp from "./TransformOp";

export default class AtanhOp extends TransformOp {

  body(a, b) {
    return Math.atanh(a);
  }

}