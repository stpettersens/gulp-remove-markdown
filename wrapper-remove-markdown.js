var rmd = require('remove-markdown');

module.exports = {
  removeMarkdown: function(file, function) {
      return rmd(file);
  }
};
