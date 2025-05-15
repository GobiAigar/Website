const timeFormater = (date) => {
  const now = new Date();
  const dateObj = new Date(date);
  const diffMs = now - dateObj;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (isNaN(diffDays)) return "Invalid date";
  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "1 day ago";
  if (diffDays > 1) return `${diffDays} days ago`;
  return `${Math.abs(diffDays)} days from now`;
};

export default timeFormater;
