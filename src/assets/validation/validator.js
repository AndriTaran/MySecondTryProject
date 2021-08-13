const validator = (schema) => (values) => schema.validate(values, {
  abortEarly: false,
  strict: false,
}).then(() => ({})).catch(({inner}) =>  inner.reduce((memo, {path, message}) => ({
  ...memo,
  [path]: (memo[path] || []).concat(message),
}), {}))

export default validator;
