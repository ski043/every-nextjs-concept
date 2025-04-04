import "server-only";

export async function getPhoto(id: string) {
  const data = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
  const photo = await data.json();
  return photo;
}
