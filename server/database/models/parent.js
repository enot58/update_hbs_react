'use strict';
const Models = require("../models/index.js")
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Parent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Parent.belongsToMany(Models.Child, {through: Models.ParentChild})
    }
  }
  Parent.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Parent',
  });
  return Parent;
};