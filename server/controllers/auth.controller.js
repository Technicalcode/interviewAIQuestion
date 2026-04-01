const User = require("../models/user.model");
const genToken = require("../utils/token");

const googleAuth = async (req, res) => { // ✅ export const hata diya
  try {
    const { name, email } = req.body;
    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ name, email });
    }

    let token = await genToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,  // ✅ 'http' nahi, 'httpOnly' sahi hai
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: `Google auth error ${error}` });
  }
};

const logout = async (req, res) => { // ✅ export const hata diya
  try {
    await res.clearCookie("token");
    return res.status(200).json({ message: "LogOut Successfully" });
  } catch (error) {
    return res.status(500).json({ message: `Logout error ${error}` });
  }
};

module.exports = { googleAuth, logout }; // ✅ end mein export karo