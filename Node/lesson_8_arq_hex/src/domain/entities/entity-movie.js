module.exports = (db) => {
  const movieSchema = new db.Schema(
    {
      title: { type: String, required: true },
      poster: { type: String, required: true },
    },
    {
      timestamps: true,
    }
  );
  return db.model('movie', movieSchema);
};
