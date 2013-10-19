var testosterone = require('testosterone')({port: 3000})
  , assert = testosterone.assert;

testosterone
  .get('/hello',function(res){
    assert.equal(res.statusCode, 200);
  })

  .get('/hi',function(res){
    assert.equal(res.statusCode, 500);
  })

  .post('/hi', {data: {message: 'hola'}}, {
    status: 200
    ,body: 'hola'
  });
