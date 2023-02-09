const mongoose = require('mongoose');

const connectDatabase = async () => {
  const data = await mongoose.connect(process.env.DB_URI)
 console.log(`Mongodb  connected with Server : ${data.connection.host}`);

};

module.exports = connectDatabase;
