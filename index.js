const express = require('express') 
const app = express()
const exp = require('express-handlebars') 
require('dotenv').config()

app.engine('handlebars', exp.engine())
app.set('view engine', 'handlebars') 
 
const PORT = process.env.PORT
app.get('/', (req, res) => {
res.render('home')
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))