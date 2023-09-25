export const countDoun = () => {
  const eventDate = new Date("2023-10-12T09:00:00-07:00");
  const currentDate = new Date();
  const remaining = eventDate.getTime() - currentDate.getTime();

  const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};
