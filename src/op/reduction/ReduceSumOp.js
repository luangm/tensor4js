import ReductionOp from "./ReductionOp";

export default class ReduceSumOp extends ReductionOp {

  constructor(input, other, result, {reducedDims} = {}) {
    super(input, other, result);
    this._reducedDims = reducedDims;
  }

  get reducedDims() {
    return this._reducedDims;
  }

  body(a, b) {
    return a;
  }

  getResult(accum, n) {
    return accum;
  }

  update(accum, a) {
    return accum + a;
  }

}