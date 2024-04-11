const router = require('koa-router')()
const { generateIndex } = require("../middleware/generate-html")

router.get('/', generateIndex)

module.exports = router
