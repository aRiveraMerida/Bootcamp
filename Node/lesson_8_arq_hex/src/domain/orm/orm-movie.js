const conn = require('../repositories/mongo.repository');
const magic = require('../../utils/magic');

exports.GetAll = async () => {
  try {
    return await conn.db.connMongo.Movie.find();
  } catch (error) {
    magic.LogDanger('Cannot getAll movies', error);
    return await { err: { code: 123, message: error } };
  }
};

exports.Create = async (Title, Poster) => {
  try {
    const data = await new conn.db.connMongo.Movie({
      title: Title,
      poster: Poster,
    });
    data.save();
    return true;
  } catch (error) {
    magic.LogDanger('Cannot Create movie', error);
    return await { err: { code: 123, message: error } };
  }
};
