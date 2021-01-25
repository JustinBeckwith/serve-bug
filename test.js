const http = require('http');
const serve = require('serve-handler');

http.createServer((req, res) => {
  return serve(req, res, {
    public: '.',
    directoryListing: false,
  });
})
.listen(3000);
