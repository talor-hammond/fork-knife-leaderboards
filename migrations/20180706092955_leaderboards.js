
exports.up = function(knex, Promise) {
  return knex.schema.createTable('leaderboards', table => {
    table.string('id').primary()
    table.string('username')
    table.string('win_ratio')
    table.integer('total_wins')
    table.integer('kdr')
    table.string('total_kills')
    table.integer('rating')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('leaderboards')

};
