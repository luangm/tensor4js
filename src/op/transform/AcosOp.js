import TransformOp from "./TransformOp";

export default class AcosOp extends TransformOp {

  body(a, b) {
    return Math.acos(a);
  }

}