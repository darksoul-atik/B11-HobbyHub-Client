const TimeCount = (groupInfo) => {
  const startDate = new Date(groupInfo.startDate);
  const now = new Date();
  const msLeft = startDate.getTime() - now.getTime();

  const isSameLocalDay = (a, b) =>
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();

  if (msLeft <= 0) {
    return "Event date has expired";
  }

  if (isSameLocalDay(startDate, now)) {
    const hoursLeft = Math.floor(msLeft / (1000 * 60 * 60));
    const minutesLeft = Math.floor((msLeft % (1000 * 60 * 60)) / (1000 * 60));

    return hoursLeft > 0
      ? `Today (${hoursLeft}h ${minutesLeft}m left to join)`
      : `Today (${minutesLeft}m left to join)`;
  }

  const daysLeft = Math.ceil(msLeft / (1000 * 60 * 60 * 24));
  return `${daysLeft} day${daysLeft === 1 ? "" : "s"} left to join`;
};

export default TimeCount;
