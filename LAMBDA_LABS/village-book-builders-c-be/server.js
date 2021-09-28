const port = process.env.PORT || 5000;
const jsonServer = require('json-server');
const auth = require('json-server-auth');
const cors = require('cors');

const app = jsonServer.create();
const router = jsonServer.router('db.json');

app.use(cors());

app.db = router.db;
//binding app to db
app.use(auth);
app.use(router);

app.listen(port, () => console.log(`\n** Running on port ${port} **\t http://localhost:${port}/\n`));
