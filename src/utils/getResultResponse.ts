export const getResultResponse = () => {
  const uuids = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith('-')) {
      uuids.push(localStorage.getItem(key));
    }
  }

  const responseFormat = uuids.map((item) => JSON.parse(`[${item}]`));

  return responseFormat.filter((item) => item[0] === 1);
};
