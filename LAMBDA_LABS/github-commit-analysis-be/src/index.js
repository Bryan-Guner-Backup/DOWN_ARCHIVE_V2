require('dotenv').config();

const { createStore } = require('./datasources');
const { createExpressApp } = require('./api');

// sequelize was initiated in /models/index.js
const { sequelize, models: store } = createStore();

sequelize
// this connects the database
  .authenticate()
  .then(() => {
    console.log(`\nā Connection with database successfully established.`);
    sequelize
      .sync({ force: true })
      .then(() => console.log(`ā Database successfully synchronized.`))
      .then(() => {
        const app = createExpressApp(store);
        app.set('view engine', 'ejs');
        app.listen(process.env.PORT, () => {
          console.log(
            `š Server now listening at:`,
            `http://localhost:${process.env.PORT}\n`,
          );
        });
      })
      .catch((error) =>
        console.error(`š§ Unable to synchronize database: ${error}`),
      );
  })
  .catch((error) => {
    console.error(`š§ Unable to connect to the database: ${error}`);
  });
