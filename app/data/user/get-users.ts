import "server-only";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export async function getUsers(): Promise<User[]> {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();
  return users;
}
