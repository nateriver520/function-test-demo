var testosterone = require('testosterone')({port: 3000})
  , assert = testosterone.assert;

testosterone  
  .get('/user', function (res) {
    var expectRes = [
        {name:'jack'}, 
        {name:'tom'}
    ];

    assert.equal(res.statusCode, 200);
    assert.equal(JSON.stringify(JSON.parse(res.body)),JSON.stringify(expectRes));
  })

  .get('/user/1', function (res) {
    
    var user = JSON.parse(res.body);

    assert.equal(res.statusCode, 200);
    assert.equal(user.name, "node js");
    assert.equal(user.description,"I am node js");
  })
