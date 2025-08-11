// config/database.js
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      // Render Postgres connection (bruker én env: DATABASE_URL)
      connectionString: env('DATABASE_URL'),
      ssl: {
        // Render krever SSL; sertifikatet er ikke nødvendigvis “CA-signet”
        rejectUnauthorized: false,
      },
    },
    pool: {
      min: 0,
      max: 10,
    },
    // Sett til true hvis du vil debugge SQL i loggene
    debug: false,
  },
});
