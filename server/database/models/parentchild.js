'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ParentChild extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ParentChild.init({
    idChild: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'ParentChild',
  });
  return ParentChild;
};