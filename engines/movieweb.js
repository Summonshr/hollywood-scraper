const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')
const slugify = require('slugify')
module.exports = function(data){
   request(data.link, function (error, response, html) {
    if (!error && response.statusCode == 200) {
       var $ = cheerio.load(html)
       fs.writeFileSync('./posts/' + slugify(data.title, {strict: true, lower:true}).replace('/',''), $('.article-body').html().trim())
    }
});
}