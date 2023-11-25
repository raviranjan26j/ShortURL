const express  = require('express');
const path = require('path');
const app = express();
const Connection = require('./connection');
const URLRouter = require('./Routes/URLRoutes')
const SSRRouter = require('./Routes/SSRRoutes')
const HomeRouter = require('./Routes/HomeRoutes')
const CookiesParser = require('cookie-parser')
const auth = require('./Middlewares/UserAuth')

//mongo db connection
Connection('mongodb+srv://way2raviranjan:Ivar%40123@cluster0.gk6aqqk.mongodb.net/ShortURL?retryWrites=true&w=majority')

app.set('view engine','ejs');
app.set('views',path.resolve('./Views'));

//in build middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(CookiesParser());
app.use(express.static(path.join(__dirname,'public')))

app.use('/url',auth,URLRouter);
app.use('/SSR',auth,SSRRouter);
app.use('/',HomeRouter);

app.listen(process.env.PORT,()=> console.log('server is running'));

