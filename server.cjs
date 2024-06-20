import jsonServer from "json-server";
import jwt from "jsonwebtoken";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

const SECRET_KEY = "your_secret_key";
const expiresIn = "1h";

server.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = router.db.get("users").find({ username, password }).value();

  if (user) {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn });
    res.status(200).json({ token });
  } else {
    res.status(401).json({ message: "Invalid username or password" });
  }
});

server.use(router);

server.listen(5000, () => {
  console.log("JSON Server is running");
});
