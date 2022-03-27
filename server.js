const express = require("express");
  const mongoose = require('mongoose');
// express/mongoose imports
const app = express();
  const PORT = process.env.PORT || 3001;
// use express
app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
    app.use(express.static("public"));
// define routing
app.use(require("./routes"));
// mongodb connection parameters
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/social-network-api", {
  useFindAndModify: false,
    useNewUrlParser: true,
      useUnifiedTopology: true,
});

// log mongo queries
  mongoose.set("debug", true);

app.listen(PORT, () => console.log(`APP successfully connected at:${PORT}`));
