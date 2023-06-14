const {readFile, writeFile} = require('fs')

readFile('./content/subfolder/first.txt','utf8',(err,result)=>{
    if (err){
        console.log(err)
        return
    }
    const first = result
    readFile('./content/subfolder/second.txt','utf8',(err,result)=>{
        if (err){
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/subfolder/result-sync.txt',`\nBlah Blah`,{flag:'a'},(err,result)=>{
            if (err) {
                console.log(err)
                return
            }
            console.log(result)
        })

    })
})