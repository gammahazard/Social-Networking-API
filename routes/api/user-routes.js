const router = require("express").Router();
// user routes constants defined - requires user-controller model
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/user-controller");

// access through /api/users
router.route("/").get(getAllUser).post(createUser);

// access through  /api/users/USERID
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);
// access through /api/users/USERID/friends/FRIENDID
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
