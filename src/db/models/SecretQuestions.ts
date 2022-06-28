import { DataTypes, Model } from "sequelize";
import { sequelizeConnect } from "../sequelizeConnect";

export interface SecretQuestionsAttributes {
  id: number;
  question1: string;
  question2: string;
  answer1: string;
  answer2: string;
}

export interface SecretQuestionsInsert {
  question1: string;
  question2: string;
  answer1: string;
  answer2: string;
}

class SecretQuestions extends Model<
  SecretQuestionsAttributes,
  SecretQuestionsInsert
> {
  declare id: number;
  declare question1: string;
  declare question2: string;
  declare answer1: string;
  declare answer2: string;
}

SecretQuestions.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    question1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    question2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answer1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answer2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeConnect,
    paranoid: true,
    timestamps: true,
  }
);

export default SecretQuestions;
