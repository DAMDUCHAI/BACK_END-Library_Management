'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbFeedBack extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({tbDocGia}) {
      this.belongsTo(tbDocGia,{foreignKey:'MaDocGia'});
    }
  }
  tbFeedBack.init({
    MaDocGia: DataTypes.INTEGER,
    NoiDung: DataTypes.STRING,
    TrangThai: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'tbFeedBack',
  });
  return tbFeedBack;
};