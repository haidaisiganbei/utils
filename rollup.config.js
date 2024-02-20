export default {
  input: 'src/index.js',  // 入口文件
  output: [
    {
      file: 'dist/index.cjs.js',  // 输出文件
      format: 'cjs'  // 输出模块格式
    },
    {
      file: 'dist/index.esm.js',  // 输出文件
      format: 'es'  // 输出模块格式
    }
  ]
};