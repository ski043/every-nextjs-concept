/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

export const revalidate = 3600; // invalidate every hour

async function getItemsError() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!res.ok) {
    throw new Error("Failed to fetch items");
  }

  const data = await res.json();
  return data;
}

const TestPage = async () => {
  const items = await getItemsError();
  return (
    <div>
      <h1>hello</h1>
      <ul>
        {items.map((item: any) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TestPage;
