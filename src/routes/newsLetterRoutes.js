const router = require("express").Router();
const { getAllSubscribedUsers, joinNewsletter, sendNewsLetter, deleteSubscriber } = require("../controllers/newsLetterController");
const { adminAndSuperAdmin } = require("../middlewares/authMiddleware");


router.get("/",adminAndSuperAdmin, getAllSubscribedUsers);
router.post("/", joinNewsletter);
router.post("/send",adminAndSuperAdmin, sendNewsLetter);
router.delete("/:id", adminAndSuperAdmin, deleteSubscriber);
// router.get("/:id", publicPrivateMiddleware, getSubscriberById);

module.exports = router;

