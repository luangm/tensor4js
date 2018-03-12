import TransformOp from "./TransformOp";

export default class AcoshOp extends TransformOp {

  body(a, b) {
    return Math.acosh(a);
  }

}