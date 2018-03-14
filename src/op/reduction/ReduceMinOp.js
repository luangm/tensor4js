import ReductionOp from "./ReductionOp";

export default class ReduceMinOp extends ReductionOp {

  get initialValue() {
    return Number.MAX_VALUE;
  }

  update(accum, a) {
    return Math.min(accum, a);
  }

}