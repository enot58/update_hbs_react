import { Sequelize} from "sequelize";
const sequelize = new Sequelize('crm', 'root', '28162342', {
    host: 'localhost',
    dialect: "mysql"
});

import Model from "../database/models/index.js"
const getUser = async () => {
    const user = await Model.User.findAll({raw: true})
    console.log(user)
}


try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    getUser()
} catch (error) {
    console.error('Unable to connect to the database:', error);
}



