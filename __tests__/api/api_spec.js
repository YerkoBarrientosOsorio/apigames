const frisby = require('frisby');


it ('GET should return a status of 200 OK', function () {
  return frisby
    .get('http://localhost:5000/api/games')
    .expect('status', 200);
});


it ('POST should return a status of 201 Created', function () {
  return frisby
    .post('http://localhost:5000/api/game', {
      name: 'The Witcher 7',
      developer: 'Spokko',
      genre: 'Role-playing game',
      mode: 'Single-player'
  })
    .expect('status', 201);
});

it ('DELETE Game by name should return a status of 200', function () {
  return frisby
    .del('http://localhost:5000/api/game', {
      name: 'The Witcher 7',
  })
    .expect('status', 200);
});