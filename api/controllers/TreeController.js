/**
 * TreeController
 *
 * @description :: Server-side logic for managing trees
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	




  /**
   * `TreeController.render()`
   */
  render: function (req, res) {

  	var graph = require('fbgraph');
  	graph.setAccessToken('CAACEdEose0cBALkuNfqgMjxReo2kx49iaMKmFk9g20GBvMOoQ2G6qh19CADGGUhjWtrWg6v0cgHxNn5LMIHqoq7MR6ZA67JnCFNTWeXXirTtZBFQZBqUfRNJTxO1MkuCAAfejrA78ZBLkwWhlFT0W3G1jEypoE1YZCZCyturgSDQZApRZCcN7kAP3JuPAMMszZAuZCrtxyRZBAP2gZDZD');
	

graph.batch([
  {
    method: "GET",
    relative_url: "me" // Get the current user's profile information
  },
  {
    method: "GET",
    relative_url: "me/friends?limit=50" // Get the first 50 friends of the current user
  }
], function(err, res) {
  console.log('res');
  console.log(res);
  // [
  //   {
  //     "code": 200, 
  //     "headers":[
  //       {"name": "Content-Type", "value": "text/javascript; charset=UTF-8"}
  //     ],
  //     "body": "{\"id\":\"…\"}"
  //   },
  //   {
  //     "code": 200,
  //     "headers":[
  //       {"name": "Content-Type", "value": "text/javascript; charset=UTF-8"}
  //     ],
  //     "body":"{\"data\": [{…}]}"
  //   }
  // ]
});


    res.view({
      errors: req.flash('error')
    });
  }


};

