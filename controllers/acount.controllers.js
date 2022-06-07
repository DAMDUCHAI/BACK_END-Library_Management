const {tbAcount,sequelize} =require('../models')
const createAcount = async (req, res) => {
  const {Email} = req.body; 
 try {
   const PassWord = '123a123@';
   const Role = '1'
      const newAcount = await tbAcount.create({Email,PassWord,Role});
      res.status(201).send(newAcount);
    } catch (error) {
      res.status(500).send(error);
    }

  };
const getListAcount = async (req, res) => {
    
    try {

        const acountList = await tbAcount.findAll();
        res.status(200).send(acountList);
      
    } catch (error) {
      res.status(500).send(error);
    }
  };
const getAcount= async (req, res) => {
  const { id } = req.params;
  try {
    const acount =await tbAcount.findOne({
      where: {
        id,
      }
    })
    res.status(200).send(acount);
  } catch (error) {
    res.status(500).send(error)

  }
}
const updateAcount = async (req, res) => {
  const { id } = req.params;
  const {Email,PassWord,Role} = req.body; 
  try {
    const acount = await tbAcount.findOne({
      where: {
        id,
      },
    });
    acount.Email = Email;
    acount.PassWord = PassWord;
    acount.Role = Role;
    await acount.save();

    res.status(200).send(acount);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteAcount = async (req, res) => {
  const { id } = req.params;
  try {
    await tbAcount.destroy({
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
 
    createAcount,
    getListAcount,
    getAcount,
    updateAcount,
    deleteAcount
 
  };