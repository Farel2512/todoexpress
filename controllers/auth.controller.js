const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { where } = require('sequelize');

module.exports = {
  login: async (req, res) => {
    const userLogin = req.body;

    try {
      const user = await User.findOne({ where: { email: userLogin.email } });
      if (!user) throw new Error('invalid user');

      console.log(user.password, userLogin.password);
      if (user.password !== userLogin.password) throw new Error('invalid user');

      const token = jwt.sign({ id: user.id, email: user.email }, 'emhaeseferel');

      res.json({
        message: 'login berhasil',
        userId: user.id,
        token,
      });
    } catch (error) {
      res.json(error.message);
    }
  },

  register: async (req, res) => {
    const data = req.body;
    await User.create(data);

    res.status(201).json({
      message: 'berhasil mendaftar data user',
      user: data,
    });
  },
};
