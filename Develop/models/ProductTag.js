const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'ID',
      },
    },
    Tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'ID',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
