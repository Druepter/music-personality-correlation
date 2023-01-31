const express = require('express')
const app = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = mysql.createPool({
    host: "db5011763130.hosting-data.io",
    user: "dbu397355",
    password: "Washburn12!!!",
    database: "dbs9909973"
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))


app.get('/huhu', (req, res) => {

    console.log(db.getConnection());

    /*const sqlInsert = "INSERT INTO users (username, valenz, arousal) VALUES ('testUser', 10, 10)"
    db.query(sqlInsert, (err, result) => {
        console.log(err)
        console.log(result)
        res.send(err)
    })   */
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

    const userID = req.body.userID
    const age = req.body.age
    const gender = req.body.gender
    const goldMSI = req.body.goldMSI

    const sqlInsert = "INSERT INTO personal_data (userID, age, gender, goldMSI) VALUES (?, ?, ?, ?)"
    db.query(sqlInsert, [userID, age, gender, goldMSI], (err, result) => {
        console.log(err)
        console.log(result)
    })    

})  

app.post("/insertBigFiveUserData", (req, res) => {

    const userID = req.body.userID
    const extraversion = req.body.extraversion
    const neurotizismus = req.body.neurotizismus
    const offenheit = req.body.offenheit
    const gewissenhaftigkeit = req.body.gewissenhaftigkeit
    const vertraeglichkeit = req.body.vertraeglichkeit


    const sqlInsert = "INSERT INTO big_five (userID, extraversion, neurotizismus, offenheit, gewissenhaftigkeit, vertraeglichkeit) VALUES (?, ?, ?, ?, ?, ?)"
    db.query(sqlInsert, [userID, extraversion, neurotizismus, offenheit, gewissenhaftigkeit, vertraeglichkeit], (err, result) => {
        console.log(err)
        console.log(result)
    })

})

app.post("/insertBigFiveArtistOneData", (req, res) => {
    
    const userID = req.body.userID
    const artistName = req.body.artist
    const extraversion = req.body.extraversion
    const neurotizismus = req.body.neurotizismus
    const offenheit = req.body.offenheit
    const gewissenhaftigkeit = req.body.gewissenhaftigkeit
    const vertraeglichkeit = req.body.vertraeglichkeit
    

    const sqlInsert = "INSERT INTO big_five_artist_one (userID, artistName, extraversion, neurotizismus, offenheit, gewissenhaftigkeit, vertraeglichkeit) VALUES (?, ?, ?, ?, ?, ?, ?)"
    db.query(sqlInsert, [userID, artistName, extraversion, neurotizismus, offenheit, gewissenhaftigkeit, vertraeglichkeit], (err, result) => {
        console.log(err)
        console.log(result)
    })


}) 

app.post("/insertBigFiveArtistTwoData", (req, res) => {
    
    const userID = req.body.userID
    const artistName = req.body.artist
    const extraversion = req.body.extraversion
    const neurotizismus = req.body.neurotizismus
    const offenheit = req.body.offenheit
    const gewissenhaftigkeit = req.body.gewissenhaftigkeit
    const vertraeglichkeit = req.body.vertraeglichkeit
    

    const sqlInsert = "INSERT INTO big_five_artist_two (userID, artistName, extraversion, neurotizismus, offenheit, gewissenhaftigkeit, vertraeglichkeit) VALUES (?, ?, ?, ?, ?, ?, ?)"
    db.query(sqlInsert, [userID, artistName, extraversion, neurotizismus, offenheit, gewissenhaftigkeit, vertraeglichkeit], (err, result) => {
        console.log(err)
        console.log(result)
    })


})

app.post("/insertBigFiveArtistThreeData", (req, res) => {
    
    const userID = req.body.userID
    const artistName = req.body.artist
    const extraversion = req.body.extraversion
    const neurotizismus = req.body.neurotizismus
    const offenheit = req.body.offenheit
    const gewissenhaftigkeit = req.body.gewissenhaftigkeit
    const vertraeglichkeit = req.body.vertraeglichkeit
    

    const sqlInsert = "INSERT INTO big_five_artist_three (userID, artistName, extraversion, neurotizismus, offenheit, gewissenhaftigkeit, vertraeglichkeit) VALUES (?, ?, ?, ?, ?, ?, ?)"
    db.query(sqlInsert, [userID, artistName, extraversion, neurotizismus, offenheit, gewissenhaftigkeit, vertraeglichkeit], (err, result) => {
        console.log(err)
        console.log(result)
    })


})




app.listen(3001, () => {
    console.log("running")
})