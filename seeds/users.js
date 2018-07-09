
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'cliff', hash: 'lol'},
        {id: 2, username: 'cliff1', hash: 'lol1'}
      ]);
    });
};
