const server = require("./api/server");
// const helmet = require("helmet");

// const db = require('./data/dbConfig');
// const zooDb = require('./api/zoos/zoosDb');

// const server = express();

// server.use(express.json());
// server.use(helmet());

// endpoints here

// server.post("/zoos", async (req, res) => {
//   const zoo = req.body;

//   try {
//     const id = await db.insert(zoo).into('zoos');
//     if (id) {
//       res.status(200).json({ id: id[0] });
//     } else {
//       res.status(500).json(err);
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// server.get('/zoos', async (req, res) => {
//   try {
//     const zoos = await zooDb.get();
//     res.status(200).json(zoos);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// })

const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
