const translate = require('google-translate-api')
const express = require('express')
const chalk = require('chalk')
var bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.json())

app.listen(1000, function(err) {
    if (err) {
        console.log(chalk.red(err))
    } else {
        console.log(chalk.blue('Server Listening on port 1000!'))
    }
})
2
app.post('/translate-text', function(req, res) {
    var data = req.body
    console.log(chalk.green(data.text))
    translate(data.text, {to: data.languageCode}).then(result => {
        var sendMe = {text: result.text}
        res.status(200).json(result.text)
    }).catch(err => {
        console.error(err)
        res.status(500)
    })
})



function textToText(translateMe, lang){
    translate(translateMe, {to: lang}).then(res => {
        console.log(res.text)
        //=> I speak English
        console.log(res.from.language.iso)
        //return (res.text)
        console.log(res.text)

        //=> nl
    }).catch(err => {
        console.error(err)
    })
}
