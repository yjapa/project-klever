const { Schema } = require('mongoose');

const TransactionSchema = new Schema({
  txid: { type: String, required: true },
  amount: { type: String, required: true }, 
}, { versionKey: false });

module.exports = TransactionSchema;