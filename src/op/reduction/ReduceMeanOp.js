import ReductionOp from "./ReductionOp";

export default class ReduceMeanOp extends ReductionOp {

  get shouldPostProcess() {
    return true;
  }

  getResult(accum, n) {
    return accum / n;
  }

  update(accum, a) {
    return accum + a;
  }

}