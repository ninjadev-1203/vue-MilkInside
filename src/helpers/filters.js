const dateOptions = {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
};

// eslint-disable-next-line
export const dateFilter = (date) => new Date(date).toLocaleDateString('en-GB', dateOptions);
