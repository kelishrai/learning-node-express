const express = require('express')
const app = express()
const port = 5000;

const logger = ( req , res , next ) => {
    console.log( req.method , req.url , new Date().getTime())
    next()
}

const admin = "Kelish"

const authorization = ( req , res , next ) => {
    const { user } = req.query
    console.log( typeof user )
    if( user === admin ) {
        req.user = { name : user , length : 6 }
    } else {
        res.status(401).send('Unauthorized')
    }
    next()
}

app.use([ authorization , logger ])

app.get( '/' , ( req , res ) => {
    console.log( req.user.name + " is hitting!" )
    res.send('HOME')
})

app.get( '/about' , ( req , res ) => {
    res.send('ABOUT')
})

app.get( '/contact' , ( req , res ) => {
    res.send('CONTACT')
})

app.listen(port, ()=>{
    console.log(`Server started at ${port}`);
})