import Operation from "../Operation"

export default class ArangeOp extends Operation {

  constructor(input, other, result, {start = 0, stop = 1, step = 1} = {}) {
    super(input, other, result, {start, stop, step});

    this._start = start;
    this._stop = stop;
    this._step = step;
  }

  get isSpecial() {
    return true;
  }

  body(a, b, offset) {
    return offset * this._step + this._from;
  }

  exec() {
    let result = this.result.data;
    let val = this._start;
    for (let i = 0; i < result.length; i++) {
      result[i] = val;
      val += this._step;
    }
  }

}