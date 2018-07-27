exports.onClientEntry = () => {
  const WebFont = require('webfontloader');

  WebFont.load({
    google: {
      families: ['PT Sans', 'PT Serif'],
    },
  });
};
