const express = require("express")


const app = express()

const PORT = 3000

function delay(duration) {
const startTimer = Date.now()
 while(Date.now() - startTimer < duration){
         
 }

}

app.get("/", (req, res) => {
    res.send("Server runing tests")
})

app.get("/test", (req, res) => {
    delay(9000)
    res.send("Server running tests"+ process.pid)
})

console.log("several node instances running with id "+ process.pid)



app.listen(PORT, () => {
    console.log(`Server listening on port... ${PORT}`)
})

