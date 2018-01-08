const compiler = require('compilex')
const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const options = {
    stats: true
}
compiler.init(options)
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))


app.post('/gcc', function(req, res, next) {
    var envData = {
        os: 'linux',
        cmd: 'gcc'
    }
    var program = req.body.code
    var input = req.body.input

    compiler.compileCPPWithInput(envData, program, input, (data)=>{
        var apiData = {
            compiler: 'Code Lordz',
            version: '0.0.1',
            envData: envData,
            program: program,
            input: input,
            error: data.error,
            output: data.output
        }
        clearTemp()
        res.send(apiData)
    })
})

app.post('/javac', function(req, res, next) {
    var envData = {
        os: 'linux',
        cmd: 'javac'
    }
    var program = req.body.code
    var input = req.body.input

    compiler.compileJavaWithInput(envData, program, input, (data)=>{
        var apiData = {
            compiler: 'Code Lordz',
            version: '0.0.1',
            envData: envData,
            program: program,
            input: input,
            error: data.error,
            output: data.output
        }
        clearTemp()
        res.send(apiData)
    })
})

app.post('/python', function(req, res, next) {
    var envData = {
        os: 'linux'
    }
    var program = req.body.code
    var input = req.body.input

    compiler.compilePythonWithInput(envData, program, input, (data)=>{
        var apiData = {
            compiler: 'Code Lordz',
            version: '0.0.1',
            envData: envData,
            program: program,
            input: input,
            error: data.error,
            output: data.output
        }
        clearTemp()
        res.send(apiData)
    })
})

app.post('/php', function(req, res, next) {
    var envData = {
        os: 'linux'
    }
    var program = req.body.code
    var input = req.body.input

    compiler.compilePhpWithInput(envData, program, input, (data)=>{
        var apiData = {
            compiler: 'Code Lordz',
            version: '0.0.1',
            envData: envData,
            program: program,
            input: input,
            error: data.error,
            output: data.output
        }
        clearTemp()
        res.send(apiData)
    })
})

function clearTemp(){
    compiler.flush(()=>{
        console.log('All temp file cleared')
    })
}

app.listen(3000, ()=> {
    console.log('App listening on port 3000!')
})