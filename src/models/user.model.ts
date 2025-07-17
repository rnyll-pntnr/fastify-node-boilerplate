import { Schema, model } from 'mongoose'

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: () => Date.now(),
    },
    updatedAt: {
      type: Date,
      default: () => Date.now(),
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (_doc, _ret: any) => {
        _ret._id = _ret._id.toString()
        delete _ret.__v
      },
    },
  },
)

const User = model('users', UserSchema)

export default User
