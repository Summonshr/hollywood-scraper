const request = require('request')
module.exports = function(data){
    console.log(data)
   request(data.link, function (error, response, html) {
    if (!error && response.statusCode == 200) {
       var $ = cheerio.load(html)
    }
});
}