const conn = require('../repositories/mongo.repository');
const magic = require('../../utils/magic');

exports.GetAll = async () => {
  try {
    return await conn.db.connMongo.Show.find();
  } catch (error) {
    magic.LogDanger('Cannot getAll shows', error);
    return await { err: { code: 123, message: error } };
  }
};

exports.Create = async (Title, Poster) => {
  try {
    const data = await new conn.db.connMongo.Show({
      title: Title,
      poster: Poster,
    });
    data.save();
    return true;
  } catch (error) {
    magic.LogDanger('Cannot Create show', error);
    return await { err: { code: 123, message: error } };
  }
};
