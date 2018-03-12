import TransformOp from "./TransformOp";

export default class Log1pOp extends TransformOp {

  body(a, b) {
    return Math.log1p(a);
  }

}