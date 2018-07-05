
exports.up = function(knex, Promise) {
  return knex.schema.createTable('leaderboards', table => {
    table.integer('id').primary()
    table.string('username')
    table.integer('win_ratio')
    table.integer('total_wins')
    table.integer('kdr')
    table.integer('total_deaths')
    table.integer('total_kills')
    table.integer('rating')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('leaderboards')
  
};
