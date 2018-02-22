
exports.up = function(knex, Promise) {
  return knex.schema.createTable('coffee', table => {
    table.increments('id').primary()
    table.string('name', 60)
    table.string('roaster', 60)
    table.float('aroma')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('coffee')
};
