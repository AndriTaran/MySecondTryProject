const validator = (schema) => (values) => schema.validate(values, {
  abortEarly: false,
  strict: false,
}).catch(({inner}) =>  inner.reduce((memo, {path, message}) => ({
  ...memo,
  [path]: (memo[path] || []).concat(message),
}), {}))

export default validator;
