import Operation from "../Operation"

export default class LinspaceOp extends Operation {

  constructor(input, other, result, {from = 0, to = 0, num = 1} = {}) {
    super(input, other, result, {from, to, num});

    this._from = from;
    this._step = num === 1 ? 0 : (to - from) / (num - 1);
  }

  get isSpecial() {
    return true;
  }

  get type() {
    return 'linspace';
  }

  body(a, b, offset) {
    return offset * this._step + this._from;
  }

  exec() {
    let result = this.result.data;
    let val = this._from;
    for (let i = 0; i < result.length; i++) {
      result[i] = val;
      val += this._step;
    }
  }

}