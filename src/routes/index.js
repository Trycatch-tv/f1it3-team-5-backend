import express from "express"
const router = express.Router();
import fs  from "fs";

const PATH = __dirname;



const removeExtension = (filename)=>{
    return filename.split('.').shift()
}

fs.readdirSync(PATH).filter((file)=>{
    const name = removeExtension(file)
    if(name!='index'){
        router.use(`/${name}`, require(`./${file}`))
    }
})

module.exports = router
