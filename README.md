This is an example of a wild bug in vercel/serve-static!

```
npm install
node test.js
```

I suspect it's because of the pattern `5.0` in the path.  Try the following routes:
- http://localhost:3000/docs/normal
- http://localhost:3000/docs/6
- http://localhost:3000/docs/5.0

The last one provides a 404, while the `docs/5.0/index.html` does in fact exist.
