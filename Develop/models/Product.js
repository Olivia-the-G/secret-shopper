// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    Stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
    Category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'Id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
