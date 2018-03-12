import TransformOp from "./TransformOp";

export default class TanGradOp extends TransformOp {

  body(a, b) {
    let sec = 1 / Math.cos(a);
    return sec * sec;
  }

}