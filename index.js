const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const path = require('path')
app.use(express.static(path.join(__dirname,'views')))

app.get('/',(req,res)=>{
	res.sendFile(root)
})

app.listen(PORT,()=>{
	console.log(`Server running at ${PORT}`)
})