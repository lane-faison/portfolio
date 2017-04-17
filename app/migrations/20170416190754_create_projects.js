exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', table => {
    table.increments()
    table.string("title").notNullable()
    table.string("description").notNullable()
    table.text("image_url").notNullable()
    table.text("project_url").notNullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects')
}
