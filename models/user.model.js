import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import { isEmail } from 'validator';

/* eslint func-names: 0 */

const Schema = mongoose.Schema;
mongoose.Promise = require('bluebird');

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    validate: [{ validator: value => isEmail(value), msg: 'Invalid email.' }],
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

UserSchema.pre('save', function (next) {
  // hash password
  this.password = this.encryptPassword(this.password);
  next();
});

/**
 * Methods
 */
UserSchema.methods = {
  /**
   * authenticate - check if the passwords are the same
   *
   * @param {String} plainText
   * @return {Boolean} boolean
   * @api public
   */
  authenticate(plainText) {
    if (!plainText || !this.password) {
      return false;
    }
    return bcrypt.compareSync(plainText, this.password);
  },

  /**
   * Encrypt password
   *
   * @param {String} password
   * @return {String} encrypted
   * @api public
   */
  encryptPassword(password) {
    if (!password) {
      return '';
    }
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  },
};

const User = mongoose.model('User', UserSchema);

export default User;
