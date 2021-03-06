exports.up = function(knex, Promise) {
  return knex.schema.createTable('tools', table => {
    table.increments()
    table.string("name").notNullable()
    table.text("image_url").notNullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tools')
}
