// There are 3 manin parts to server code
    // set up dependencies
// this brings the express JS library into the code to use
import express from "express"
import pg from "pg";
import cors from "cors";
import dotenv from 'dotenv';

dotenv.config();

const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

const app = express();
const PORT = process.env.PORT || 3000


app.use(express.json());
app.use(express.static('Static'));
app.use(cors());

// const unknownHttp = ((req, res, next) => {
//     res.sendStatus(404)
//     next()
// })

    // handle requests with routes
// when a user vists the server and make a GET Request and URL path 
// then respond with  "pet info"
// GET //
app.get('/api/owner', (req,res) => {
    pool.query("SELECT * FROM owner").then((data) => {
          res.send(data.rows);
          console.log(data.rows);
      })
    //   .catch(next)
    console.log(req.body)
  });
  //
app.get('/api/pets', (req,res) => {
    pool.query("SELECT * FROM pets").then((data) => {
          res.send(data.rows);
          console.log(data.rows);
      })
    //   .catch(next)
    console.log(req.body)
  });

//  // GET SPECIFIC// 
// // adding a new route here to handle a GET request for the path "/"
app.get('/api/owner/:id', (req, res, next) => {
    const { id } = req.params;
    pool.query(`SELECT * FROM owner WHERE id = $1;`,[id]).then((data) => {
        const owner = data.rows[0];
        console.log(owner)
        if (owner) {
            res.send(data.rows[0]);
        }else{
            res.sendStatus(404);
        }
    })
    // .catch(next);
  });

//   app.get('/api/pets/:id', (req, res, next) => {
//     const { id } = req.params;
//     pool.query(`SELECT * FROM pets WHERE id = $1;`,[id]).then((data) => {
//         const pet = data.rows[0];
//         console.log(pet)
//         if (pet) {
//             res.send(pet);
//         }else{
//             res.sendStatus(404);
//         }
//     })
//     // .catch(next);
//   });

// // POST //
app.post("/api/owner", (req,res,next) => {
    const { name, address, phone_number } = req.body;
    if(!name || !address || !phone_number) {
        res.sendStatus(400)
    }else{
    pool.query(
        `INSERT INTO owner (name, address, phone_number) VALUES ($1, $2, $3)RETURNING *;`,
        [name, address, phone_number]
        ).then((data) => {
            res.status(200).send(data.rows[0]);
        })
        // .catch(next);
    }
});

// app.post("/api/pets", (req,res,next) => {
//     const { name, age, type, color } = req.body;
//     if(!name || !age || !type || !color) {
//         res.sendStatus(400)
//     }else{
//     pool.query(
//         `INSERT INTO pets (name, age, type, color) VALUES ($1, $2, $3, $4)RETURNING *;`,
//         [name, age, type, color]
//         ).then((data) => {
//             res.status(200).send(data.rows[0]);
//         })
//         // .catch(next);
//     }
// });

// // PATCH //
//     app.patch("/api/owner/:id", (req,res,next) => {
//         const { id } = req.params;
//         const { name, address, phone_number } = req.body;
//         if(name || address || phone_number) {
//         pool.query(`
//             UPDATE owner
//             SET name = COALESCE($1, name),
//                 address = COALESCE($2, address),
//                 phone_number = COALESCE($3, phone_number)
//             WHERE id = $4
//             RETURNING *;
//         `, [name, address, phone_number, id])
//             .then((data) => {
//                 res.status(200).send(data.rows[0]);
//             })
//             // .catch(next);
//         }else{
//             res.sendStatus(400);
//         }   
//     });
//     app.patch("/api/pets/:id", (req,res,next) => {
//         const { id } = req.params;
//         const { name, age, type, color } = req.body;
//         if(name || age || type || color) {
//         pool.query(`
//             UPDATE pets
//             SET name = COALESCE($1, name),
//                 age = COALESCE($2, age),
//                 type = COALESCE($3, type),
//                 color = COALESCE($4, color)
//             WHERE id = $5
//             RETURNING *;
//         `, [name, age, type, color, id])
//             .then((data) => {
//                 res.status(200).send(data.rows[0]);
//             }).catch(next);
//         }else{
//             res.sendStatus(400);
//         }   
//     });

//     // DELETE //
// app.delete("/api/owner/:id", (req,res) => {
//     const id = req.params.id;
//     pool.query('DELETE FROM owner WHERE id = $1 RETURNING *;',[id]).then(data => {
//         if(data.rows.length === 0 ) {
//             res.sendStatus(404)
//         }else {
//         res.send(204);
//         }
//     })
//     .catch(next);
// });

// app.delete("/api/pets/:id", (req,res) => {
//     const id = req.params.id;
//     pool.query('DELETE FROM pets WHERE id = $1 RETURNING *;',[id]).then(data => {
//         if(data.rows.length === 0 ) {
//             res.sendStatus(404)
//         }else {
//         res.send(204);
//         }
//     })
//     .catch(next);
// });

// app.use((err, req, res, next) => {
//         res.sendStatus(500);
//         pool.end();
// });

    // listen on a port
// here we specify what port# the program listens on
// for a web browser on the same machine, use localhost:3000
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
});

// app.use(unknownHttp);


