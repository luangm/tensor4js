import Operation from "../Operation";

export default class ReductionOp extends Operation {

  constructor(input, other, result, {reducedDims} = {}) {
    super(input, other, result);
    this._reducedDims = reducedDims;
  }

  get initialValue() {
    return 0;
  }

  get reducedDims() {
    return this._reducedDims;
  }

  /**
   * Return if the op should have a post process step
   * @return {boolean}
   */
  get shouldPostProcess() {
    return false;
  }

  body(a, b) {
    return a;
  }

  getResult(accum, n) {
    return accum;
  }

  update(accum, a) {
    return accum;
  }

}