const express = require('express')
const app = express()

app.use(express.json())
app.set('view engine', 'ejs');


// home routers 
app.use('/', require('./router/home'));

// user routers
app.use('/user', require('./router/user'));


//admin routes 
app.use('/admin', require('./router/admin'));

// departement routes
app.use('/departement', require('./router/departement'));




app.listen(3000, () => {
    console.log('Server is Up at http://localhost:3000');
})