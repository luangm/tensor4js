import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
// import uglify from 'rollup-plugin-uglify';
import pkg from './package.json';

export default [
  {
    input: 'src/index.js',
    output: {
      name: 'tensor4js',
      file: pkg.rollup,
      format: 'umd'
    },
    plugins: [
      resolve(), // so Rollup can find `ms`
      babel({
        plugins: ['external-helpers'],
        exclude: 'node_modules/**' // only transpile our source code
      })
      // ,uglify()
    ]
  }
];