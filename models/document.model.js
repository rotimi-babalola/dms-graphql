import mongoose from 'mongoose';
import User from './user.model';

/* eslint func-names: 0 */

const Schema = mongoose.Schema;

mongoose.Promise = require('bluebird');

const DocumentSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
  },
  access: {
    type: String,
    enum: ['public', 'private'],
    default: 'public',
  },
  owner: {
    type: Schema.Types.ObjectId,
    required: true,
  },
}, {
  timestamps: true,
});

DocumentSchema.pre('save', function (next) {
  const self = this;
  User.findOne({ _id: self.owner }, (error, existUser) => {
    if (error) {
      return next(Error(error));
    } else if (!existUser) {
      return next(Error('Owner does not exist'));
    }
    next();
  });
});

const Document = mongoose.model('Document', DocumentSchema);

export default Document;
