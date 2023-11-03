const rootLoader = async () => {
  const token = document.cookie;
  console.log('token', token);
  return { token };
};

export default rootLoader;
