const URLModels = require('../Models/URL');


async function handleSSRGetAllURL(req,res) {
    let userid =req.userid;
    console.log('userid=====',userid)
    let allUrl = await URLModels.find({CreatedBy: userid});
    console.log(allUrl)
    return res.render('ShortUrlApp',{ 
        url: allUrl
    })
}

module.exports = {handleSSRGetAllURL,}
