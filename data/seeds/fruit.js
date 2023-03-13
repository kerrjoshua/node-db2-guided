/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('fruit').truncate()
  await knex('fruit').insert([
    {fruit_name: 'foo', fruit_color: 'bar', delicious: null, avg_weight_oz: 3},
    {fruit_name: 'baz', fruit_color: 'fizz', delicious: true, avg_weight_oz: 35},
    {fruit_name: 'buz', fruit_color: 'brown',  delicious: 0, avg_weight_oz: 2.5}
  ]);
};
