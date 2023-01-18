import app from "./app.js";
import { sequelize } from "./database/db.js";
import {PORT} from'./config.js';

async function main() {
    try {
        // await sequelize.authenticate();
        await sequelize.sync({ force: false });
        app.listen(PORT);
        console.log("Server is listening on port", PORT);
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}

main();
