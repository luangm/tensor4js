import TransformOp from "./TransformOp";

export default class SetOp extends TransformOp {

  constructor(input, other, result, {scalar} = {}) {
    super(input, other, result);
    this._scalar = scalar;
  }

  body(a, b) {
    return this._scalar;
  }

}