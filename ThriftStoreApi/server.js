import { createServer } from "http";
import app from "./index.js";
const port = process.env.PORT || 3000;
const server = createServer(app);

server.listen(port, () => {
  console.log("Im Listening " + port);
});
