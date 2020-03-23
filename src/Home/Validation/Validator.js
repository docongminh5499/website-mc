// Support these constraint ----------
// required: true/ false
// email: true/ false
// number: true/ false
// string: true/ false
// min (for number only): <number> number must larger or equal than
// minLength: <number>
// equal: <field name> the value must be equal to file-name value

// Error return has schema:
//  { <field-name>: <array-error-message>, ...  }      -- Object (each key is field-name)
// Data has schema:
// { <field-name>: <data>,  <field-name>:<data>, .... }
// Rule has schema:
// { <field-name>: <object of rules> , <field-name>: <object of rules> , ... }

import validator from 'validator';

export function ValidatorData(data, rules) {
  let errors = {};
  Object.keys(rules).forEach(rule => {
    let error = [];
    if (rules[rule].required && validator.isEmpty(data[rule])) error.push('This field is required.');
    if (rules[rule].email && !validator.isEmail(data[rule])) error.push('Invalid email.');
    if (rules[rule].number && !validator.isNumeric(data[rule])) error.push('This field can contain number only.');
    if (rules[rule].string && !validator.isAlpha(data[rule])) error.push('This field can contain letter only.');
    if (rules[rule].min && data[rule] < rules[rule].min)
      error.push(`The value must be larger than or equal ${rules[rule].min}.`);
    if (rules[rule].minLength && !validator.isLength(data[rule], rules[rule].minLength)) {
      error.push(`This field must be ${rules[rule].minLength} length.`);
    }
    if (rules[rule].equal && !validator.equals(data[rule], data[rules[rule].equal])) {
      error.push("The value don't match");
    }
    if (error.length) errors[rule] = error;
  });
  return errors;
}
