const translate = require('google-translate-api')
const prompt = require('prompt')


consoleApp()

function consoleApp(){
    prompt.start()
    prompt.get(['words','language'],function(err,result){
        textToText(result.words, result.language)
    })
}

function textToText(translateMe, lang){
    translate(translateMe, {to: lang}).then(res => {
        console.log(res.text)
        //=> I speak English
        console.log(res.from.language.iso)
        //=> nl
    }).catch(err => {
        console.error(err)
    })
}