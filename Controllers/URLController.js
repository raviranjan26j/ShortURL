const URLModels = require('../Models/URL');
const shortid = require('shortid');

async function HandleCreateNewURL(req,res) {
  console.log('req.Body = ',req.body);
  let url = req.body.url;
  console.log('url value = ',url);
  const ShortId = shortid();
  console.log('req==',req?.userid);
  if(!url) return res.json({result:'url cannot be blank'}).status(400);
  let result = await URLModels.create({
    ShortURL:ShortId,
    URL:url,
    visitHistory: [],
    CreatedBy: req?.userid
  })
  res.redirect('/SSR');
}

async function HandleGetShortURL (req,res) {
  let shortid = req.query.shorturl;
  console.log('req==',req)
  console.log('shortid==',shortid)
  let result = await URLModels.findOneAndUpdate(
    {ShortURL: shortid,},
    {
      $push: {
        visitHistory : {TimeStamp: Number(Date.now())}
      }
    }
    );
    console.log('url==',result.URL)
    let link = result.URL.toString();
   res.redirect(link);
   //res.redirect('https://google.com');
}

async function HandleGetRedirectURL(req,res){
 const id = req.params.ID;
 console.log('id',id);
 let redirecturl = await URLModels.findOneAndUpdate(
  {ShortURL: id,},
  {
    $push: {
      visitHistory : {TimeStamp: Number(Date.now())}
    }
  })
  console.log('url==',redirecturl.URL)
  let link = redirecturl.URL.toString();
   res.redirect(link);
}


module.exports= {
    HandleCreateNewURL,HandleGetShortURL,HandleGetRedirectURL
}
