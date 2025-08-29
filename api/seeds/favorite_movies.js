/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("favorite_movies").del();
  await knex("favorite_movies").insert([
    {
      id: 1,
      title: "The Lord of The Rings",
      main_character: "Frodo",
      year_released: 2001,
    },
    {
      id: 2,
      title: "The Dark Knight",
      main_character: "Bruce Wayne",
      year_released: 2008,
    },
    {
      id: 3,
      title: "The Other Guys",
      main_character: "Alan & Terry",
      year_released: 2010,
    },
  ]);
};
