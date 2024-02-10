const app = require('./app')
const db = require('./db/db.js');
require("dotenv").config();

const PORT = process.env.PORT || 4000;

db.DB();

app.listen(PORT, () => {
  console.log(`Todo app listening on port ${PORT}`)
})