/* eslint no-console:0 */
var jsonschema = require('jsonschema')
var Validator = jsonschema.Validator

var schema = {
  id: '/settings',
  type: 'object',
  properties: {
    bestTime: {
      type: 'string',
      pattern: '^[maen]{1}$',
    },
    sleepTimes: {
      type: 'array',
      format: 'sequentialTime',
    }
  }
}

/**
 * @param  {Array} input array of sleep Times
 * @return {Boolean} result result of validation
 */
Validator.prototype.customFormats.sequentialTime = (input) => {
  var parsed = input.map((i) => parseInt(i))
  parsed = input.filter((i) => Number.isInteger(i))

  if(parsed.length !== 2) {
    return parsed + ' should be an array of numbers of length 2'
  }

  const inBounds = parsed.reduce((prev, time) => prev && (0 <= time <= 2400), 0)

  if(!inBounds) {
    return parsed + ' should have times between 0 and 2400'
  }

  return true
}

var buster = new Validator()
buster.addSchema(schema, '/settings')

/**
 * Validate given object against above schema, which requires this basic form:
 * bestTime: either m or a or n (morning, afternoon, or night)
 * sleepTime: an array of 2 numbers in military time
 *
 * @param  {Object} obj a settings object
 * @return {Boolean} results Errors generated in validating the object
 */
 exports.check = (obj) => {
  const result = buster.validate(obj, schema)
  result.errors.forEach((error) => {
    if(process.env.NODE_ENV == 'test') {
      console.log(error)
    }
  })
  return result.errors
}
