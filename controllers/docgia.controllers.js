const {tbDocGia,sequelize} =require('../models')
const createReader = async (req, res) => {
  const {MaThongTinChung,MaThe,MaAcount} = req.body; 
 try {
      const newReader = await tbDocGia.create({MaThongTinChung,MaThe,MaAcount});
      res.status(201).send(newReader);
    } catch (error) {
      res.status(500).send(error);
    }

  };
  const getListReader = async (req, res) => {
    const { name } = req.query;
    try {
      if (name) {
        const [results] = await sequelize.query(
          ` select tbdocgia.id,tbthongtinchungs.Ten,tbthongtinchungs.DiaChi,tbthongtinchungs.Phone,tbgioitinhs.NoiDung  as GioiTinh,tbacounts.Email from tbdocgia left join tbthongtinchungs on tbdocgia.MaThongTinChung=tbthongtinchungs.id inner join tbacounts 
          on tbdocgia.MaAcount=tbacounts.id inner join tbgioitinhs on tbthongtinchungs.MaGioiTinh=tbgioitinhs.id
           where tbthongtinchungs.Ten LIKE `%{name}%``
        )
        res.status(200).send(results);
      } else {
        const [results] = await sequelize.query(
          `select tbdocgia.id,tbthongtinchungs.Ten,tbthongtinchungs.DiaChi,tbthongtinchungs.Phone,tbgioitinhs.NoiDung  as GioiTinh,tbacounts.Email from tbdocgia left join tbthongtinchungs on tbdocgia.MaThongTinChung=tbthongtinchungs.id inner join tbacounts 
          on tbdocgia.MaAcount=tbacounts.id inner join tbgioitinhs on tbthongtinchungs.MaGioiTinh=tbgioitinhs.id`
        )
        res.status(200).send(results);
      }
    } catch (error) {
      res.status(500).send(error);
    }
  };
const getReader= async (req, res) => {
  const { id } = req.params;
  try {
    const reader =await tbDocGia.findOne({
      where: {
        id,
      }
    })
    res.status(200).send(reader);
  } catch (error) {
    res.status(500).send(error)

  }
}
const updateReader = async (req, res) => {
  const { id } = req.params;
  const {MaThongTinChung,MaThe,MaAcount} = req.body; 
  try {
    const reader = await tbDocGia.findOne({
      where: {
        id,
      },
    });
    reader.MaThongTinChung = MaThongTinChung;
    reader.MaThe = MaThe;
    reader.MaAcount = MaAcount;
    await reader.save();

    res.status(200).send(reader);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteReader = async (req, res) => {
  const { id } = req.params;
  try {
    await tbDocGia.destroy({
      where: {
        id,
      },
    });
    res.status(200).send("xóa thành công");
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = {
 
    createReader,
    getListReader,
    getReader,
    updateReader,
    deleteReader
 
  };