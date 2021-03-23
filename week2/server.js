const express = require("express");
const app = express();


 
let users = [
    { name: 'mike', location: 'texas' },
    { name: 'nathan', location: 'texas' },
    { name: 'Olivia', location: 'texas' }
];

let movieData = [
  {name: '8 Seconds', year: '1994'},
  {name: 'Pure Country', year: '1992'},
  {name: 'The Ride', year: '1997'}
];

let actorData = [
  {actor: 'Luke Perry', name:'Lane Frost'},
  {actor: 'George Strait', name:'Dusty Wyatt'},
  {actor: 'Brock Pierce', name:'Danny ONeil'}
]


app.get('/users', (req, res) => {
  res.send(users)

});

app.get('/movieData', (req, res) => {
  res.send(movieData)

});

app.get('/actorData', (req, res) => {
  res.send(actorData)

});

app.listen(9000, () => {
    console.log(`The server is running on port 9000`)
})