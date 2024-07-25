function format(template, ...values) {
  return template.replace(/{(\d+)}/g, (match, index) => values[index]);
}

// export default format;
module.exports = format;
