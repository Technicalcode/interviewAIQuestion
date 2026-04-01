const jwt = require("jsonwebtoken");

const genToken = async (userId) => {
   try {
      const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
         expiresIn: "7d"
      });
      return token;
   } catch (error) {
      console.log("Token Generation Error : ", error);
      throw error;
   }
};

module.exports = genToken; // ✅ export default hata ke ye lagao