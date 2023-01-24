const express = require('express')
const app = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "asdf1234",
    database: "spotify_data"
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))


app.get('/', (req, res) => {

    const sqlInsert = "INSERT INTO users (username, valenz, arousal) VALUES ('testUser', 10, 10)"
    db.query(sqlInsert, (err, result) => {
        console.log(err)
        console.log(result)
        res.send(err)
    })   
})

app.post("/createEntry", (req, res) => {

    const username = req.body.username
    const valenz = req.body.valenz
    const arousal = req.body.arousal

    const sqlInsert = "INSERT INTO users (username, valenz, arousal) VALUES (?, ?, ?)"
    db.query(sqlInsert, [username, valenz, arousal], (err, result) => {
        console.log(err)
        console.log(result)
    })
    res.send("huhu")
})



app.post("/insertValenceArousal", (req, res) => {

    const valence = req.body.valence
    const arousal = req.body.arousal

    const sqlInsert = "INSERT INTO musictaste (valence, arousal) VALUES (?, ?)"
    db.query(sqlInsert, [valence, arousal], (err, result) => {
        console.log(err)
        console.log(result)
    }) 


    console.log("Valenz " + req.body.valence)
    console.log("Arousal "+ req.body.arousal)
    res.send("huhu")
}) 

app.post("/insertPersonalData", (req, res) => {

    const age = req.body.age
    const gender = req.body.gender

    const sqlInsert = "INSERT INTO personaldata (age, gender) VALUES (?, ?)"
    db.query(sqlInsert, [age, gender], (err, result) => {
        console.log(err)
        console.log(result)
    })    

    console.log("Personal Data")
    console.log("Alter " + req.body.age)
    console.log("Geschlecht "+ req.body.gender)
    res.send("huhu")
})  

app.post("/insertGoldMSIScorce", (req, res) => {
    console.log("Gold MSI Score:" + req.body.goldMSIScore)

}) 

app.post("/insertBigFiveUserData", (req, res) => {

    const extraversion = req.body.extraversion
    const neurotizismus = req.body.neurotizismus
    const offenheit = req.body.offenheit
    const gewissenhaftigkeit = req.body.gewissenhaftigkeit
    const vertraeglichkeit = req.body.vertraeglichkeit
    const valenz = req.body.valenz
    const arousal = req.body.arousal


    console.log("Big Five User Data")
    console.log("Extraversion " + extraversion)
    console.log("Offenheit " + offenheit)
    console.log("Neurotiziesmus " + neurotizismus)
    
    console.log("Gewissenhaftigkeit " + gewissenhaftigkeit)
    console.log("Verträglichkeit " + vertraeglichkeit)
    console.log("valenz " + valenz)
    console.log("arousal " + arousal)



    const sqlInsert = "INSERT INTO user_data (extraversion, neurotizismus, offenheit, gewissenhaftigkeit, vertraeglichkeit, valenz, arousal) VALUES (?, ?, ?, ?, ?, ?, ?)"
    db.query(sqlInsert, [extraversion, neurotizismus, offenheit, gewissenhaftigkeit, vertraeglichkeit, valenz, arousal], (err, result) => {
        console.log(err)
        console.log(result)
    })
    res.send("huhu")


})

app.post("/insertBigFiveArtistOneData", (req, res) => {
    
    const extraversion = req.body.extraversion
    const neurotizismus = req.body.neurotizismus
    const offenheit = req.body.offenheit
    const gewissenhaftigkeit = req.body.gewissenhaftigkeit
    const vertraeglichkeit = req.body.vertraeglichkeit
    const name = req.body.artist

    console.log("Big Artist One Data")
    console.log("Extraversion " + extraversion)
    console.log("Neurotiziesmus " + neurotizismus)
    console.log("Offenheit " + offenheit)
    console.log("Gewissenhaftigkeit " + gewissenhaftigkeit)
    console.log("Verträglichkeit " + vertraeglichkeit)
    console.log("Name "+ name)

}) 

app.post("/insertBigFiveArtistTwoData", (req, res) => {
    
    const extraversion = req.body.extraversion
    const neurotizismus = req.body.neurotizismus
    const offenheit = req.body.offenheit
    const gewissenhaftigkeit = req.body.gewissenhaftigkeit
    const vertraeglichkeit = req.body.vertraeglichkeit
    const name = req.body.artist

    console.log("Big Artist Two Data")
    console.log("Extraversion " + extraversion)
    console.log("Neurotiziesmus " + neurotizismus)
    console.log("Offenheit " + offenheit)
    console.log("Gewissenhaftigkeit " + gewissenhaftigkeit)
    console.log("Verträglichkeit " + vertraeglichkeit)
    console.log("Name "+ name)

}) 

app.post("/insertBigFiveArtistThreeData", (req, res) => {
    
    const extraversion = req.body.extraversion
    const neurotizismus = req.body.neurotizismus
    const offenheit = req.body.offenheit
    const gewissenhaftigkeit = req.body.gewissenhaftigkeit
    const vertraeglichkeit = req.body.vertraeglichkeit
    const name = req.body.artist

    console.log("Big Artist Three Data")
    console.log("Extraversion " + extraversion)
    console.log("Neurotiziesmus " + neurotizismus)
    console.log("Offenheit " + offenheit)
    console.log("Gewissenhaftigkeit " + gewissenhaftigkeit)
    console.log("Verträglichkeit " + vertraeglichkeit)
    console.log("Name "+ name)

}) 




app.listen(3001, () => {
    console.log("running")
})