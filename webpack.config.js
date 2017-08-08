var config = {
   entry: './main.js', // the entry point for App
	
   output: {
      filename: 'bundle.js', //Bundle file name >> it can be any string name
   },
	
   devServer: {
      inline: true,
      port: 8080
   },
	
   module: {
      loaders: [
         {
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader', 
				
            query: {
               presets: ['es2015', 'react'] 
            }
         }
      ]
   }
}

module.exports = config;