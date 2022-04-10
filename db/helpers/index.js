const validateRequest = (body, validBody) => {
  const requestBody = Object.keys(body).sort();
  const requestBodyProps = Object.keys(validBody).sort();
  return JSON.stringify(requestBody) === JSON.stringify(requestBodyProps);
};

module.exports = validateRequest;
