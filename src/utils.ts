const isEmail = (value: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
};

const getBaseURL = () => {
  return process.env.BASE_URL || 'https://api.staging.fourthwall.com/api/mailing-list';
};

export { isEmail, getBaseURL };
