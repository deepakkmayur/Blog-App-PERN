const Joi = require('joi');

const addMandate = {
  body: Joi.object({
    mfid: Joi.number().integer().positive().required(),
    valid_from: Joi.string().regex(/^\d{4}-\d{2}-\d{2}$/).required(),
    valid_to: Joi.string().allow(null).optional(),
    mandate_limit: Joi.string().regex(/^[0-9]+$/).required(),
  })
  .error((err) => {
    if (err) {
      console.log(err, "///addMandate err////");
    }
  }),
};

// Example usage:
const dataToValidate = {
  mfid: 123,
  valid_from: '2021-09-16',
  valid_to: null,
  mandate_limit: '1002',
};

const { error } = addMandate.body.validate(dataToValidate);
if (error) {
  console.log('Validation error:', error);
} else {
  console.log('Data is valid.');
}








