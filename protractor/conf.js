// conf.js
exports.config = {
  SeleniumServerJar: '/bin',
  localSeleniumStandaloneOpts: {
  port: 4040
  },
  capabilities: {
    browserName: 'chrome',
    shardTestFiles: true,
    maxInstances: 6,
  },
  framework: 'jasmine',
  specs: ['user-spec.js'],
  resultJsonOutputFile: 'result.json',
  onPrepare: function() {
    global.user = {
      name: 'Vannak',
      email: 'vannak.learn',
      password: 'Drowssap12'
    };
  }
}
