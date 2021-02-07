const express = require("express");
const connectDB = require("./config/db");

const app = express();

const path = require("path");

connectDB();

// Middleware

app.use(express.json({ extended: false }));

// app.get("/", (req, res) => res.json({ msg: "Server running" }));

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`port ${PORT}`));
