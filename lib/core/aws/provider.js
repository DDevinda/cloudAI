const awsSDk = require('aws-sdk');

class AWS {
  /**
   * Exposing AI services by AWS
   * @constructor
   */
  constructor(configPath) {
    this._AWS = awsSDk;
    if (
      !this._AWS.config.credentials ||
      !this._AWS.config.credentials.accessKeyId ||
      !this._AWS.config.credentials.secretAccessKey ||
      !process.env.AWS_REGION
    ) {
      if (configPath) {
        this._AWS.config.loadFromPath(configPath);
      } else {
        throw new Error('Provide credentials');
      }
    }

    return {
      getSDK: () => this._AWS  
    };
  }
}

module.exports = AWS;
