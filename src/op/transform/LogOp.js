import TransformOp from "./TransformOp";

export default class LogOp extends TransformOp {

  body(a, b) {
    return Math.log(a);
  }

}