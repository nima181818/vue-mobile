const handler = require('serve-handler');
const http = require('http');
console.log(__dirname+'wocoa')
const server = http.createServer((request, response) => {
  // You pass two more arguments for config and middleware
  // More details here: https://github.com/vercel/serve-handler#options
  return handler(request, response,{
    public:__dirname
  });
})

server.listen(3001, () => {
  console.log('Running at http://localhost:3001');
});