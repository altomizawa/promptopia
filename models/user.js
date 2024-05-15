import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!']
  },
  username: {
    type: String,
    required: [true, 'Username is required!'],
    match: [/^[0-9A-Za-z]{6,16}$/, ' Username must be between 6 and 16 characters long and contain only letters and numbers']
  },
  image: {
    type: String,
  }
})

const User = models.User || model('User', UserSchema);

export default User;