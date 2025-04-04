import "server-only";

export async function getUser(id: string) {
  const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await data.json();
  return user;
}
