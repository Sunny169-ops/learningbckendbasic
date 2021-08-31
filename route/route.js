
const express = require("express")

const {createUser, getUser} = require("../controller/userController")
const {createPost,getPost} = require("../controller/postController")
const {getTag ,createTag} = require("../controller/tagController")
const {getPost_Tag  ,createPost_Tag} = require("../controller/post_tag_Controller")

const router = express.Router();

router.post('/adduser',createUser)
router.get('/getuser', getUser)
router.post('/addpost', createPost)
router.get('/getpost', getPost)
router.post('/addtag', createTag)
router.get('/gettag', getTag)

router.get('/getpost_tag',getPost_Tag)
router.post('/addpost_tag',createPost_Tag)





module.exports = router