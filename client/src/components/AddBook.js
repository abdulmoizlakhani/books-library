import React from "react";
import { useQuery } from "@apollo/client";
import { getAuthorsQuery } from "../graphql/queries/queries";

export default function AddBook() {
  const { loading, data } = useQuery(getAuthorsQuery);

  return (
    <form id="add-book">
      <div className="field">
        <label>Book Name:</label>
        <input type="text" />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input type="text" />
      </div>
      <div className="field">
        <label>Author:</label>
        <select disabled={loading} placeholder="Select Author">
          {data?.authors.map((author) => (
            <option key={`author_${author.id}`} value={author.id}>
              {author.name}
            </option>
          ))}
        </select>
      </div>

      <button>+</button>
    </form>
  );
}
