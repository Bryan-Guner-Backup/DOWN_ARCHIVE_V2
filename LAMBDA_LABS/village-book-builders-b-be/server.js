const port = process.env.PORT || 5000;
const jsonServer = require('json-server-relationship');
const auth = require('json-server-auth');
const fs = require('fs');
const cors = require('cors');

const app = jsonServer.create();
const router = jsonServer.router('db.json');

app.use(cors());

// Uncomment these next 3 lines if you want to implement
// protected routes. Otherwise, leave them commented.
// const routes = JSON.parse(fs.readFileSync('./routes.json'));
// const rules = auth.rewriter(routes);
// app.use(rules);

app.use(auth);
app.use(router);

app.db = router.db;
//binding app to db

app.use(router);

app.listen(port, () => console.log(`\n** Running on port ${port} **\t http://localhost:${port}/\n`));
