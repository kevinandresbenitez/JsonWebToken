import path from 'path';
    /*"build": "babel src --out-dir build",*/
    
export default  {
    entry:'./src/App/index.js',
    output:{
        path:path.resolve(path.dirname('src'), 'src','static'),
        filename:'bundle.js'
    },

    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      },
      

};
  