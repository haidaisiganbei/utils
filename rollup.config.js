export default {
  input: 'src/index.js',  // 入口文件
  output: [
    {
      file: 'dist/index.umd.cjs',  // 输出文件
      format: 'cjs'  // 输出模块格式
    },
    {
      file: 'dist/index.esm.mjs',  // 输出文件
      format: 'es'  // 输出模块格式
    }
  ]
};