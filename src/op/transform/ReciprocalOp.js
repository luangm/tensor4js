import TransformOp from "./TransformOp";

export default class ReciprocalOp extends TransformOp {

  body(a, b) {
    return 1 / a;
  }

}