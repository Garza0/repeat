function increaseDate(days) {
  const date = new Date();
  const increasedDate = date.setDate(date.getDate() + days);
  return new Date(increaseDate);
}
