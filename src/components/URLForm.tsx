import React, { useState, useCallback } from "react";
import axios from "axios";

const URLForm: React.FC = () => {
  const [url, setUrl] = useState("");

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
        const response = await axios.get(
          `https://api.shrtco.de/v2/shorten?url=${url}`
        );
        const result = response.data;
        console.log(result);
      } catch (error) {
        console.log("Error shortening URL:", error);
      }
    },
    [url]
  );
  return (
    <div role="container" className="container">
      <h1 className="title">URL SHORTENER</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          className="url-input"
          type="text"
          value={url}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUrl(e.target.value)
          }
          placeholder="https://example.com"
        />
        <button className="button" type="submit">
          CREATE SHORT URL
        </button>
      </form>
    </div>
  );
};

export default URLForm;
