let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
   
    directConnect : true,
  
   capabilities: {
    browserName: 'chrome'
  },
  
  specs: ['../Test/4stay.spec.js'],
// suites:{
//     smoke:['../Test/smoke.spec.js'],
//     regression:['../Test/*.spec.js']
// }, 

onPrepare: function () {
    browser.driver.manage().window().maximize();
    jasmine.getEnv().addReporter(new SpecReporter({
        displayFailuresSummary: true,
        displayFailuredSpec: true,
        displaySuiteNumber: true,
        displaySpecDuration: true,
        showstack: false
      }));
      // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
      jasmine.getEnv().addReporter(new HtmlReporter({
        baseDirectory: '../report/screenshots',
        preserveDirectory: false,
        screenshotsSubfolder: 'images',
        jsonsSubfolder: 'jsons',
        docName: '4Stay-Report.html'
     }).getJasmine2Reporter());
  
},
    
    jasmineNodeOpts: {
        showColors: true, 
        defaultTimeoutInterval: 30000,    
        print: function() {}
        
}
};