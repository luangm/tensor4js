import ReductionOp from "./ReductionOp";

export default class ReduceSumOp extends ReductionOp {

  update(accum, a) {
    return accum + a;
  }

}