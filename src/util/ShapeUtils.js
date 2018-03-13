export default class ShapeUtils {

  /**
   * Broadcast two shapes, return broadcasted shape
   * @param a {Array}
   * @param b {Array}
   * @returns {Array}
   */
  static broadcastShapes(a, b) {
    let rank = Math.max(a.length, b.length);
    let result = new Array(rank); //uninitialized

    let aIndex = a.length - 1;
    let bIndex = b.length - 1;

    for (let dim = rank - 1; dim >= 0; dim--) {
      let left = aIndex >= 0 ? a[aIndex] : 1;
      let right = bIndex >= 0 ? b[bIndex] : 1;

      if (left !== 1 && right !== 1 && left !== right) {
        throw new Error('cannot broadcast shapes. not compatible');
      }

      result[dim] = Math.max(left, right);
      aIndex--;
      bIndex--;
    }

    return result;
  }

  /**
   * get dimensions that need to be broadcasted
   * @param {[int]} input
   * @param {[int]} result the broadcasted shape, could be of different length from input
   * @returns {[boolean]}
   */
  static getBroadcastedDimensions(input, result) {
    let dims = new Array(input.length);
    let resIndex = result.length - 1;
    for (let i = dims.length - 1; i >= 0; i--, resIndex--) {
      dims[i] = (input[i] === 1 && result[resIndex] !== 1);
    }
    return dims;
  }

  /**
   * Get the shape that must be reshaped to match result's rank
   * @param {[int]} input
   * @param {[int]} result
   * @return {[int]}
   */
  static getBroadcastedShape(input, result) {
    if (input.length >= result.length) {
      return input;
    }

    let newShape = input.slice();
    for (let i = 0; i < result.length - input.length; i++) {
      newShape.unshift(1);
    }
    return newShape;
  }

  static getLength(shape) {
    let mul = 1;
    for (let dim of shape) {
      mul *= dim;
    }
    return mul;
  }

  static getReducedDims(shape, dims) {
    let reducedDims = new Array(shape.length).fill(false);
    if (dims === -1) {
      reducedDims.fill(true);
    } else if (Number.isInteger(dims)) {
      if (dims < 0 || dims >= shape.length) {
        throw new Error('Dimensions must be [0 rank-1]');
      }
      reducedDims[dims] = true;
    } else if (Array.isArray(dims)) {
      for (let dim of dims) {
        if (!Number.isInteger(dim)) {
          throw new Error('Dimensions must be integers');
        }
        if (dim < 0 || dim >= shape.length) {
          throw new Error('Dimensions must be [0 rank-1]');
        }
        reducedDims[dim] = true;
      }
    } else {
      throw new Error('Dims must be int or [int]');
    }

    return reducedDims;
  }

  static getStrides(shape) {
    let rank = shape.length;
    let strides = new Array(rank);

    let val = 1;
    for (let i = rank - 1; i >= 0; --i) {
      strides[i] = val;
      val *= shape[i];
    }

    return strides
  }

  static inferOrder(shape, strides) {
    let isFortran = true; // Fortran Contiguous
    let isC = true; // C Contiguous

    let stride = 1;
    for (let i = shape.length - 1; i >= 0; i--) {
      if (stride !== strides[i]) {
        isC = false;
        break;
      }
      stride *= shape[i];
    }

    stride = 1;
    for (let i = 0; i < shape.length; i++) {
      if (stride !== strides[i]) {
        isFortran = false;
        break;
      }
      stride *= shape[i];
    }

    if (isFortran && !isC) {
      return 'f';
    }
    return 'c';
  }

  static reduce(shape, dimension) {
    let result = shape.slice();
    for (let i = 0; i < shape.length; i++) {
      if (i === dimension || dimension === -1) {
        result[i] = 1;
      }
    }
    return result;
  }

  /**
   * Get the reduced shape
   *
   * @param {[int]} shape
   * @param {int | [int]} dims - dims to reduce
   * @param {boolean} [keepDims = false]
   * @returns {[int]} Reduced Shape
   */
  static reduceShape(shape, dims, keepDims) {
    let resultShape = [];
    let reducedDims = ShapeUtils.getReducedDims(shape, dims);

    for (let i = 0; i < shape.length; i++) {
      if (!reducedDims[i]) {
        resultShape.push(shape[i]);
      } else if (keepDims) {
        resultShape.push(1);
      }
    }

    return resultShape;
  }

  /**
   * By calling this method the caller ensures the two shapes have the same rank
   * and can be cleanly divided.
   * Normally used on reduction.
   */
  static safeDivide(shape1, shape2) {
    let result = [];
    for (let i = 0; i < shape1.length; i++) {
      result.push(shape1[i] / shape2[i]);
    }
    return result;
  }
}