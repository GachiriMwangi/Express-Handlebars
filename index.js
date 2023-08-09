const express = require('express') 
const app = express()
const exp = require('express-handlebars') 

app.engine('handlebars', exp.engine())
app.set('view engine', 'handlebars') 
 
const PORT = 5000
app.get('/', (req, res) => {
res.render('home')
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))