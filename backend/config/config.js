const dotenv = require("dotenv").config();

const Joi = require("joi");

const envVarsSchema = Joi.object()
  .keys({
    PORT: Joi.number().default(8082),
    MONGODB_URL: Joi.string().required().description("Mongo DB url"),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
  port: envVars.PORT,
  mongoose: {
    url: envVars.MONGODB_URL,
  },
};
