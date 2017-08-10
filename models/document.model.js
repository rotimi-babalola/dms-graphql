import mongoose from 'mongoose';

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
    ref: 'User',
    required: true,
  },
}, {
  timestamps: true,
});

const Document = mongoose.model('Document', DocumentSchema);

export default Document;
