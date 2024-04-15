const router = require('koa-router')()
const { generateIndex, generateLogin } = require("../middleware/generate-html")

router.get('/login', generateLogin)
router.get('/', generateIndex)

module.exports = router
