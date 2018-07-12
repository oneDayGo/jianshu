const koa = require('koa');
const Router = require('koa-router');
let bodyParser = require('koa-bodyparser');
const statics = require('koa-static');
const path = require('path');

const router = new Router();
const app = new  koa();

app.use(statics( path.join( __dirname,'public')));
app.use(bodyParser());

/**图片上传 */


//引入接口
const login = require('./routers/login');
router.use('/login',login);


app
  .use(router.routes())
  .use(router.allowedMethods());


app.listen('4399');



