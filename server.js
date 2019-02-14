require('dotenv').config()
const express = require('express')
const testApp = express()
const path = require('path')
const morgan = require('morgan')
const cors = require('cors')
const compression = require('compression')

testApp.use(express.static(path.resolve(__dirname,'build')))
testApp.use(cors())
testApp.use(morgan())
testApp.use(compression())


testApp.get('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'build/index.html'))
})

testApp.listen(process.env.PORT,(err)=>{
    if(err)
      console.log(err)
    else
        console.log(`Server Started at ${process.env.PORT} `)  
})
