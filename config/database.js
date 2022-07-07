const path = require("path");

module.exports = ({ env }) => ({
  // connection: {
  //   client: 'sqlite',
  //   connection: {
  //     filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
  //   },
  //   useNullAsDefault: true,
  // },
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "159.223.67.62"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "signed-contract-strapi"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "huongdangyeu"),
      schema: env("DATABASE_SCHEMA", "public"), // Not required
      // ssl: {
      //   rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
      // },
    },
    debug: false,
  },
});
