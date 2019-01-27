module.exports = {
  fileMapTokens() {
    // Return custom tokens to be replaced in your files
    return {
      __screen__: options => {
        // logic to determine value goes here
        return  options.settings.getSetting('screenPath');
      }
    };
  },
};
