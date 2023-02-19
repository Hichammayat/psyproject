const {createConversation} =require ("../controllers/conversation")

const router = express.Router();

router.post("createConversation", createConversation)

module.exports = router;