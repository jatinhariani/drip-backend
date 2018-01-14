exports.up = (knex, Promise) => {
  return knex.schema.createTable('files', (table) => {
    table.increments()
    table.string('type').notNullable()
    table.string('originalname').notNullable()
    table.string('encoding').notNullable()
    table.string('mimetype').notNullable()
    table.string('destination').notNullable()
    table.string('filename').notNullable()
    table.string('path').notNullable()
    table.integer('size').notNullable()
    table.dateTime('createdAt').notNullable()
    table.dateTime('updatedAt').nullable()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('files')
}
