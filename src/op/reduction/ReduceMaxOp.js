import ReductionOp from "./ReductionOp";

export default class ReduceMaxOp extends ReductionOp {

  get initialValue() {
    return -Number.MAX_VALUE;
  }

  update(accum, a) {
    return Math.max(accum, a);
  }

}