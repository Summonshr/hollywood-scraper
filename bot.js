var fs = require('fs')
const homedir = 'data'
var files = fs.readdirSync(homedir);
var path = require('path');

for(var i in files) {
   if(path.extname(files[i]) === ".json") {
       JSON.parse(fs.readFileSync('data/'+files[i]).toString()).map(e=>{
           let engine = e.link.replace(/.+\/\/|www.|\..+/g, '')
            require('./engines/'+engine)(e)
       })
   }
}