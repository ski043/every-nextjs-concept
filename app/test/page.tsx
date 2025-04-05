import React from "react";

async function getItemsError() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todossss/1");
  if (!res.ok) {
    throw new Error("Failed to fetch items");
  }
  return res.json();
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
