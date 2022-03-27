const router = require("express").Router();

const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// access through /api/thoughts
// get/post
router.route("/")
  .get(getAllThought)
  .post(createThought);

// access through  /api/thoughts/THOUGHTID
// get/put/del
router.route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

// access through /api/thoughts/THOUGHTID/reactions
// post
router.route("/:thoughtId/reactions")
  .post(addReaction);

// access through /api/thoughts/THOUGHTID/reactions/REACTIONID
// delete
router.route("/:thoughtId/reactions/:reactionId")
  .delete(removeReaction);

module.exports = router;
