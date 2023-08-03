const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('Welcome on the second app')
});

const port = 3111;
app.listen(port, () => {
    console.log(`server started on ${port}`)
});