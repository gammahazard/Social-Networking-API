const { Schema, model } = require("mongoose");
// define user schema properties, username email req for posting
const UserSchema = new Schema(
  {
    username: {
      type: String,
        unique: true,
          required: true,
            trim: true,
    },
    email: {
      type: String,
        required: true,
         unique: true,
            match: [
        /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
        "Please enter a real e-mail address",
      ],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
          ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
          ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
        getters: true,
    },
    // stop duplication
    id: false,
  }
);

// show total friends on retrieval
UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// user model created using userSchema
const User = model("User", UserSchema);

// user model export
module.exports = User;

// user post req test { "username": "testuser11132",
 //  "email": "tes22232t@gmail.com"
 // }

