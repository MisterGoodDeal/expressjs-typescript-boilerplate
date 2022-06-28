import { Model, DataTypes, Sequelize } from "sequelize";
import { sequelizeConnect } from "../sequelizeConnect";

const seq = new Sequelize(
  process.env.MYSQL_DB ?? "database",
  process.env.MYSQL_USER! ?? "root",
  process.env.MYSQL_PASSWORD ?? "",
  {
    host: process.env.MYSQL_HOST,
    dialect: "mysql",
  }
);

export interface UserAttributes {
  id: number;
  username: string;
  password: string;
  favorite_color: string | null;
  SecretQuestionId: number;
}

export interface UserInsert {
  username: string;
  password: string;
  favorite_color: string | null;
  SecretQuestionId: number;
}

class User extends Model<UserAttributes, UserInsert> {
  declare id: number;
  declare username: string;
  declare password: string;
  declare favorite_color: string;
  declare SecretQuestionId: number;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    favorite_color: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    SecretQuestionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { paranoid: true, sequelize: sequelizeConnect, timestamps: true }
);

export default User;
