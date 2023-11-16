const { User } = require('../models');

module.exports = {
  getAllUser: async (req, res) => {
    try {
      const data = await User.findAll();

      res.status(200).json({
        message: 'Berhasil mendapatkan semua data user',
        user: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  },

  getUserByID: async (req, res) => {
    const { id } = req.params;
    const data = await User.findAll({ where: { id: id } });

    if (data.length === 0) {
      res.status(400).json({
        message: `User, id : ${id} tidak ditemukan`,
      });
    }

    res.status(200).json({
      message: `Berhasil mendapat data user, id : ${id}`,
      todos: data,
    });
  },

  editUserByID: async (req, res) => {
    const { id } = req.params;

    await User.update(
      { name: req.body.name },
      {
        where: {
          id: id,
        },
      }
    );

    res.status(201).json({
      message: `Berhasil mengedit user, id : ${id}`,
      users: User,
    });
  },

  deleteUserByID: async (req, res) => {
    const { id } = req.params;

    await User.destroy({
      where: {
        id: id,
      },
    });

    res.status(200).json({
      message: `Berhasil menghapus data user, id : ${id}`,
      users: User,
    });
  },
};
