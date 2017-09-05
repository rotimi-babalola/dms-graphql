import Document from '../models/document.model';

/* eslint no-unused-expressions: 0 */

const DocumentResolver = {
  create: (document) => {
    const newDocument = new Document(document);
    return new Promise((resolve, reject) => {
      newDocument.save((error, createdDocument) => {
        if (error) reject(error);
        else resolve(createdDocument);
      });
    });
  },
  getById: id => new Promise((resolve, reject) => {
    Document.findById(id, (error, document) => {
      error ? reject(error) : resolve([document]);
    });
  }),
  get: () => new Promise((resolve, reject) => {
    Document.find({}, (error, documents) => {
      error ? reject(error) : resolve(documents);
    });
  }),
  getDocumentsForUser: userId => new Promise((resolve, reject) => {
    Document.find({ owner: userId }, (error, foundDocuments) => {
      if (error) reject(error);
      else resolve(foundDocuments);
    });
  }),
  countUserDocuments: userId => new Promise((resolve, reject) => {
    Document.count({ owner: userId }, (error, count) => {
      if (error) reject(error);
      else resolve(count);
    });
  }),
};

export default DocumentResolver;
