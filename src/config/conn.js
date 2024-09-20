import { Sequelize } from "sequelize";
import "dotenv/config"

const DBName = process.env.MYSQL_NAME
const DBUser = process.env.MYSQL_USER
const DBPassword = process.env.MYSQL_PASSWORD
const DBHost = process.env.MYSQL_HOST

const conn = new Sequelize(DBName, DBUser, DBPassword, {
    dialect: "mysql",
    host: DBHost
})

try {
    await conn.authenticate()
    console.log('[DB] Conexão realizada com sucesso')
} catch (error) {
    console.error('[DB] Error: ' + error)
}

export default conn