'use strict';
const models = require('../models')

module.exports = (sequelize, DataTypes) => {
  var Note = sequelize.define('Note', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    u_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: models.User, key: 'id'
      }
    },
    title: DataTypes.STRING,
    memo: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    isDrop: DataTypes.BOOLEAN,
    dropAt: DataTypes.DATE
  }, {})
  Note.associate = function (models) {
    // associations can be defined here
  }
  return Note
}