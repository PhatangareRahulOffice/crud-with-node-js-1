const http = require("http");
const { getUsers, 
  getUser, 
  createUser,
  updateUser,
  deleteUser } = require("./controllers/userController");

const server = http.createServer((req, res) => {

    if   (req.url === "/api/users" && req.method === "GET") {
          getUsers(req, res);
      } else if 
           (req.url === "/api/users" && req.method === "POST") {
           createUser(req, res);
      } else if
           (req.url.match(/\/api\/user\/([a-z,A-Z,0-9]+)/) && req.method === "GET") {
           const id = req.url.split("/")[3];
           getUser(req, res, id);
      } else if
           (req.url.match(/\/api\/user\/([a-z,0-9,A-Z]+)/) && req.method === "PUT") {
           const id = req.url.split("/")[3];
           updateUser(req, res, id);
      } else if
           (req.url.match(/\/api\/user\/([0-9,a-z,A-Z]+)/) && req.method === "DELETE") {
           const id = req.url.split("/")[3];
           deleteUser(req, res, id);
    }
    else 
    {
       res.writeHead(404, { "Conttent-Type": "application/json" });
       res.end(JSON.stringify({ message: "Route Not Found" }));
    }
});

const PORT = process.env.PORT || 6010;
server.listen(PORT, () => console.log(`server running on Port ${PORT} `));


