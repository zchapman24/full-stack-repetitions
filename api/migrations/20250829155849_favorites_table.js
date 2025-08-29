/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("favorite_movies", (table) => {
    table.increments();
    table.string("title").notNullable();
    table.string("main_character").notNullable();
    table.integer("year_released");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("favorite_movies");
};
