module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ceur0h02i3mq2ss6258g-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_lg82'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'R7eibS1Zu63f2PpUmeLvbAjxfPvl0iiX'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
