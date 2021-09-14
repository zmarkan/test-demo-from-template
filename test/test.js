var request = require("request"),
    assert = require('assert'),
    helloWorld = require("../app.js"),
    base_url = "http://localhost:5000/";

describe("Welcome to CI/CD Server", function() {

  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        assert.equal(200, response.statusCode);
        helloWorld.close();
        done();
      });
    });
  });

  describe("welcomeMessage", function (){
    it("Validate Message", function(){
      var res = helloWorld.welcomeMessage();
      var message = "Welcome to the CityJS CircleCI Demo!";
      assert.strictEqual(res, message);
    });  
  });

  // describe("Failing test", function (){
  //   it("shall not pass", function(){
  //     assert.strictEqual(true, false);
  //   });  
  // });
});