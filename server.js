const express = require("express");
const app = express();

const dotenv = require("dotenv");
const { createProxyMiddleware } = require("http-proxy-middleware");

dotenv.config();
app.use(express.json());

const PORT = process.env.PORT || 5001;

//This is the configuration for the proxy middleware
app.use(
  "/user",
  createProxyMiddleware({
    target: "http://localhost:3000",
    pathRewrite: {
      "^/user": "",
    },
  })
);

app
  .listen(PORT, () => {
    console.log(`API Gateway is running on ${PORT}`);
  })
  .on("error", (err) => {
    console.error("Error starting server:", err);
  });
