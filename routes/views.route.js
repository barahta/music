const {Router} = require('express')
const router = Router()
const NewsController = require('../controllers/views.controller')
const authMiddlewere = require("../middlewere/auth.middlewere");
const SkillController = require("../controllers/skill.controller");

router.get('/news',NewsController.getNews)
router.post('/createpost',authMiddlewere,NewsController.createPost)


module.exports = router