import SecretQuestions from "./models/SecretQuestions";
import User from "./models/User";
import { sequelizeConnect } from "./sequelizeConnect";

const env = require("dotenv").config();

export const initDatabase = async () => {
  // Create a user with sequelize

  await User.sync({ alter: true });
  await SecretQuestions.sync({ alter: true });
  SecretQuestions.hasOne(User);
  User.belongsTo(SecretQuestions);

  const secretQuestions = await SecretQuestions.create({
    question1: "What is your favorite color?",
    question2: "What is your favorite food?",
    answer1: "red",
    answer2: "pizza",
  });

  const user = await User.create({
    username: "admin",
    password: "admin",
    favorite_color: "red",
    SecretQuestionId: secretQuestions.id,
  });

  sequelizeConnect.sync({ alter: true });
};
