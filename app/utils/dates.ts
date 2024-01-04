export const longFormatFrDate = (date: Date) => {
  let toBeConverted = date;

  if (!date) return;
  if (typeof date === 'string') toBeConverted = new Date(date);

  return toBeConverted.toLocaleDateString('fr-FR', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
};
