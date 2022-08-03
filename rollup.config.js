import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'

export default {
  input: 'src/index.jsx',
  external: ['react', 'prop-types'],
  output: [
    {
      file: 'dist/code-box.esm.js',
      format: 'es',
    },
  ],
  plugins: [
    resolve({ extensions: ['.jsx', '.js', '.tsx'] }),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.jsx', '.js', '.tsx'], 
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react']
    }),
    postcss()
  ],
}