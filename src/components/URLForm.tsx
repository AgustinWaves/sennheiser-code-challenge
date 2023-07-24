import React, { useState, useCallback } from "react";
import axios from "axios";

const URLForm: React.FC = () => {
  const [url, setUrl] = useState("");
  const [shortenUrl, setShortenUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
        const response = await axios.get(
          `https://api.shrtco.de/v2/shorten?url=${url}`
        );
        const result = response.data;
        console.log(result);
        setShortenUrl(result.result.full_short_link);
        setErrorMessage(false);
      } catch (error) {
        console.log("Error shortening URL:", error);
        if (error) {
          setErrorMessage(true);
        }
      }
    },
    [url]
  );

  const handleLinkClick = () => {
    setUrl("");
    setShortenUrl("");
  }

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
      {errorMessage === true ? <p>Please introduce a valid URL</p> : ""}
      {shortenUrl && (
        <div className="new-url-container">
          <a className="url" href={shortenUrl} onClick={handleLinkClick} target="_blank" rel="noopener noreferrer">
            {shortenUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default URLForm;
