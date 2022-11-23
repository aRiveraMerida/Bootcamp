module.exports = (db) => {
  const showSchema = new db.Schema(
    {
      title: { type: String, required: true },
      poster: { type: String, required: true },
    },
    {
      timestamps: true,
    }
  );
  return db.model('show', showSchema);
};
