//import exports from
const express = require('express');


//initialize express
const app = express();


//set port to default

const port = 8778

//introducing users routes to sever
const userRoute = require('./routes/users');
app.use(userRoute );


//listen on port

app.listen(port, () => {
    console.log(`Server is running on port`)
})