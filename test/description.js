var testosterone = require('testosterone')({port: 3000, title: 'test user api'})
  , add = testosterone.add
  , assert = testosterone.assert;

testosterone
  .add(
    'GIVEN a user id  to /user/{id}  \n' +
    'WHEN it have response user \n' +
    'THEN it should return user json',

    function (cb) {
      testosterone.get('/user/1', cb(function (res) {
        var expectRes = {
            id: 1, 
            name: "node js", 
            description: "I am node js"
        };

        assert.equal(res.statusCode, 200);
        assert.equal(JSON.stringify(JSON.parse(res.body)), JSON.stringify(expectRes));
      }));
  })


  .add(
    'GIVEN a POST  a user info to /user/edit \n' +
    'WHEN find modify success \n' +
    'THEN it should resturn status 1',

    function (cb) {
      testosterone.post('/user/edit', {data: {id: 1, name: "change name"}}, cb(function (res) {
        var res = JSON.parse(res.body);
        assert.equal(res.status, 1);
      }));
    }
  ) 

  .run(function () {
    require('sys').print('done!');
  });
