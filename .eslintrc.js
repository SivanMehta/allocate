var options = {
  'extends': 'airbnb',
  'rules': {
    'quotes': ['off', 'single']
  }
}

const rules = [ 'semi',
  'import/newline-after-import',
  'space-before-function-paren',
  'comma-dangle',
  'prefer-template',
  'camelcase',
  'object-shorthand',
  'no-var',
  'vars-on-top'
 ]

rules.forEach((rule) => {
    options.rules[rule] = ['off']
})

module.exports = options
