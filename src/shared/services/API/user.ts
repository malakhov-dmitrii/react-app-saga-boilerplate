const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const getUser = async (id: any) => {
  return await fetch("https://jsonplaceholder.typicode.com/users/1").then((r) =>
    r.json()
  );
};
