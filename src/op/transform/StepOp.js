import TransformOp from "./TransformOp";

export default class StepOp extends TransformOp {

  body(a, b) {
    return a > 0 ? 1 : 0;
  }

}