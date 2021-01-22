const puppeteer = require('puppeteer');
const fs = require('fs');
(async () => {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://duckduckgo.com/?q=marvel&t=h_&ia=web')

    let data = await page.evaluate(()=>{
        let data = [];
        let elements = document.querySelectorAll('a.module--carousel__body__title.js-carousel-item-title')
        for(var i = 0; i < elements.length; i ++) {
            let elem = elements[i]
            data.push({title: elem.innerHTML, link: elem.href})
        }
        return data;
    })

    await fs.writeFileSync('data/test.json', JSON.stringify(data))
})()