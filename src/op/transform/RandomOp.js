import TransformOp from "./TransformOp";

export default class RandomOp extends TransformOp {

  body(a, b) {
    return Math.random();
  }

}