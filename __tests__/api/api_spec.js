const frisby = require('frisby');

it ('GET default message should return a status of 200 OK', function () {
  return frisby
    .get('http://localhost:5000/')
    .expect('status', 200);
});

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

it ('POST should return a status of 403 Forbidden if the game already exists', function () {
  return frisby
    .post('http://localhost:5000/api/game', {
      name: 'The Witcher 7',
      developer: 'Spokko',
      genre: 'Role-playing game',
      mode: 'Single-player'
  })
    .expect('status', 403);
});

it ('PUT should return a status of 200 OK', function () {
  return frisby
    .put('http://localhost:5000/api/game/637d32a8d087122747297a35', {
      name: "The Witcher 3: The Wild Hunt 2",
      developer: "CD Projekt Red",
      genre: "Action RPG",
      mode: "Single-player"
    })
    .expect('status', 200);
});

it ('DELETE Game by name should return a status of 200', function () {
  return frisby
    .del('http://localhost:5000/api/game', {
      name: 'The Witcher 7',
  })
    .expect('status', 200);
});

it ('DELETE Game by name should return a status of 404 if the game does not exists', function () {
  return frisby
    .del('http://localhost:5000/api/game', {
      name: 'The Witcher 508',
  })
    .expect('status', 404);
});

it ('GET games by name should return a status of 200 OK', function () {
  return frisby
  .get('http://localhost:5000/api/gamebyname/Witcher')
  .expect('status', 200);
});

it ('GET unexisting games by name should return a status of 404 OK', function () {
  return frisby
  .get('http://localhost:5000/api/gamebyname/Witcher2')
  .expect('status', 404);
});

it ('GET games by developer should return a status of 200 OK', function () {
  return frisby
  .get('http://localhost:5000/api/gamesbydev/Spokko')
  .expect('status', 200);
});

it ('GET unexisting games by developer should return a status of 404 OK', function () {
  return frisby
  .get('http://localhost:5000/api/gamesbydev/Spokko2')
  .expect('status', 404);
});

it ('GET games by genre should return a status of 200 OK', function () {
  return frisby
  .get('http://localhost:5000/api/gamesbygenre/JRPG')
  .expect('status', 200);
});

it ('GET unexisting games by genre should return a status of 404 OK', function () {
  return frisby
  .get('http://localhost:5000/api/gamesbygenre/JRPG2')
  .expect('status', 404);
});

it ('GET games by mode should return a status of 200 OK', function () {
  return frisby
  .get('http://localhost:5000/api/gamesbymode/Single-player')
  .expect('status', 200);
});

it ('GET unexisting games by mode should return a status of 404 OK', function () {
  return frisby
  .get('http://localhost:5000/api/gamesbymode/Single-player2')
  .expect('status', 404);
});