const express = require("express");
const app = express();

const dotenv = require("dotenv");
const { createProxyMiddleware } = require("http-proxy-middleware");

dotenv.config();

const PORT = process.env.PORT || 5001;

app.use(
  "api/user",
  createProxyMiddleware({ target: "http://localhost:3000", changeorigin: true })
);

app.listen(PORT, (req, res) => {
  console.log(`API Gateway is running on ${PORT}`);
});
