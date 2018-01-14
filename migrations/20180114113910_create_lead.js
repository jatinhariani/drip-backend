exports.up = (knex, Promise) => {
  return knex.schema.createTable('leads', (table) => {
    table.increments()
    table.string('name').notNullable()
    table.string('email').notNullable()
    table.string('phone')
    table.string('pan').notNullable()
    table.string('company')
    table.dateTime('createdAt').notNullable()
    table.dateTime('updatedAt').nullable()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('leads')
}
