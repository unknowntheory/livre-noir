// var express =  require("express")
// var path =  require("path")
// var webpack =  require("webpack")
// var webpackDevMiddleware = require( "webpack-dev-middleware");
// var  config  = require("./webpack.config.babel.js");

// const app =  express(),
//       DIST_DIR = path.join(__dirnamem, 'dist'),
//       PORT = 3000,
//       compiler = webpack(config);

// app.use(webpackDevMiddleware(compiler, {
//   publicPath: config.output.publicPath
// }))

// app.get('*', (req, res, next)=> {
//   const filename = path.join(DIST_DIR, 'index.html')

//   complier.outputFileSystem.readFile(filename, (err, result) => {
//     if(err) {
//       console.log('error in here')
//       return next(err);
//     }
//     res.set('content-type', 'text/html')
//     res.send(result)
//     res.end()
//   })
// })

// app.listen(PORT)