module.exports = {
  SUCCESS_CODE: 200,
  ERROR_CODE: 500,
  PAGE: 1,
  LIMIT: 10,
  LIMIT_MAX: 100,
  ASC: "ASC",
  DESC: "DESC",
  LANGUAGE: /^(en|EN|vi|VI)$/,
  VI: "VI",
  PHONE_PREFIX: "0101",
  PHONE_REGEX:
    /^((09[0|1|2|3|4|6|7|8|9]|08[1|2|3|4|5|6|7|8|9]|07[0|6|7|8|9]|05[6|8|9]|03[2|3|4|5|6|7|8|9])+([0-9]{7})|(0101+([0-9]{6})))$\b/,
  RATE_LIMIT: 10000,
  RATE_TIME: 60 * 24,
  OTP_EXPIRED_MINUTES: 5,
  OTP_EXPIRED_DAY: 1,
  OTP_COUNT: 4,
  OTP_DEFAULT: "000000",
};