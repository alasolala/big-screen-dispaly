import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import vue from 'rollup-plugin-vue'
import autoprefixer from 'autoprefixer'
export default {
  input: "./src/index.js",
  output: [
    {
      file: './dist/bs-display-umd.js',
      format: 'umd',
      name: 'bsDisplay'
    },
    {
      file: './dist/bs-display-es.js',
      format: 'es'
    },
    {
      file: './dist/bs-display-cjs.js',
      format: 'cjs'
    }
  ],
  plugins:[
    babel({
        exclude: 'node_modules/**'
    }),
    vue({
      style: {
        postcssPlugins: [
          autoprefixer()
        ]
      }
    }),
    commonjs()
  ],
  external:[  
    'vue'
  ]
}
