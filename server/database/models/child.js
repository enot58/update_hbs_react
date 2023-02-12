'use strict';
const {
  Model
} = require('sequelize');
const Models = require("../models/index.js");
module.exports = (sequelize, DataTypes) => {
  class Child extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Child.belongsToMany(Models.Parent, {through: Models.ParentChild})
    }
  }
  Child.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Child',
  });
  return Child;
};