'use strict'

/**
 * Module dependencies
 */
const mongoose = require('mongoose'),
  Schema = mongoose.Schema

/**
 * Users Schema
 */
const UsersSchema = new Schema({
  name: {
    type: String,
    default: '',
    trim: true,
    required: 'Title cannot be blank'
  },
  email: {
    type: String,
    default: '',
    trim: true
  },
  website: {
    type: String,
    trim: true
  }
})

mongoose.model('Users', UsersSchema)
