const router = require('koa-router')()
const { generateIndex, generateLogin } = require("../middleware/generate-html")

router.get('/login', generateLogin) //this is a remark

//this is a new line for test

router.get('/', generateIndex)

module.exports = router
