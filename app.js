const express = require('express')
const keys = require('./config/keys')
//set up stripe with the secret key
const stripe = require('stripe')(keys.stripeSecretKey)
const exphbs = require('express-handlebars')

const app = express()

const port = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//default layout is going to be main.js
app.engine('handlebars', exphbs({ defaultLayout:'main' }))
app.set('view engine', 'handlebars')

//set static folder
app.use(express.static(`${__dirname}/public`))


app.get('/', (req, res) => {
    res.render('index', {
        stripePublishableKey: keys.stripePublishableKey
    })
    
})

//charge route
app.post('/charge', (req, res) => {
    const amount = 2500;
    console.log(req.body)
    
    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    }).then(customer => stripe.charges.create({
        amount: amount,
        description: 'Web development ebook',
        currency: 'usd',
        customer: customer.id
    })).then(charge => res.render('success'))
})

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})