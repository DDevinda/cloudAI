const googleSDK = require('google-cloud');

class Google {
  /**
   * Exposing AI services by google
   * @constructor
   */
  constructor(config) {
    this._googleSDK = googleSDK;
    this._googleSDK._config = config;

    if (!config.projectId && config.keyFilename) {
      throw new Error('Provide parameters projectId and key filename');
    }

    return {
      getSDK: () => this._googleSDK
    };
  }
}

module.exports = Google;
