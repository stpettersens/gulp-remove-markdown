var rmd = require('remove-markdown');

module.exports = {
  removeMarkdown: function(file, callback) {
      return callback(null, rmd(file));
  };
};
