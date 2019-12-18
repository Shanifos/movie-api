module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql'
  },

  production: {
    username: process.env.PDB_USERNAME,
    password: process.env.PDB_PASSWORD,
    database: process.env.PDB_NAME,
    host: process.env.PDB_HOST,
    dialect: 'mysql'
  },

  test: {
    username: process.env.TDB_USERNAME,
    password: process.env.TDB_PASSWORD,
    database: process.env.TDB_NAME,
    host: process.env.TDB_HOST,
    dialect: 'mysql'
  }
}
