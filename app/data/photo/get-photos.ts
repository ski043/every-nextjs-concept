import "server-only";

export async function getPhotos() {
  const data = await fetch("https://jsonplaceholder.typicode.com/photos");
  const photos = await data.json();
  return photos;
}
