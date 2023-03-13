/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable('fruit', tbl => {
    tbl.increments('fruit_id')
    tbl.string('fruit_name', 100)
        .notNullable()
        .unique()
    tbl.decimal('avg_weight_oz').notNullable()
    tbl.string('fruit_color', 30)
        .defaultTo('green')
    tbl.boolean('delicious')


  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
 await knex.schema.dropTableIfExists('fruit')
};
