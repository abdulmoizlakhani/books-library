import React from "react";
import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../graphql/queries/queries";

export default function BookList() {
  const { loading, data } = useQuery(getBooksQuery);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <ul id="book-list">
        {data.books.map((book) => (
          <li key={`book_${book.id}`}>{book.name}</li>
        ))}
      </ul>
    </div>
  );
}
