const { Schema, model, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");
// properties for rxn schema, rxn body and username required when post
const ReactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
       required: true,
          maxLength: 280,
    },
    username: {
      type: String,
        required: true,
    },
    createdAt: {
      type: Date,
        default: Date.now,
          get: (createdAtVal) => dateFormat(createdAtVal),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);
// thoughtschema, thoughttext and username  req when post
const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
       required: true,
          minLength: 1,
            maxLength: 200,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
    username: {
      type: String,
        required: true,
    },
    reactions: [ReactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
        getters: true,
    },
    id: false,
  }
);

ThoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;
// user thought post request test -
// {"thoughtText": "hello i am a test thought2",
 //  "username":"testuser12"   }

 // post rxn {"reactionBody":"nice post :D",
// "username":"testuser12"}