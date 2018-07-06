
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('leaderboards').del()
    .then(function () {
      // Inserts seed entries
      return knex('leaderboards').insert([
        {id: 1, username: 'solz t', win_ratio: 0, total_wins: 0, kdr: 1, total_kills: 20, rating: 0.05},
      ]);
    });
};
