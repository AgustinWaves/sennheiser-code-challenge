import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import URLForm from "./URLForm";
import axios from "axios";

jest.mock("axios");


describe("URLForm", () => {
  beforeEach(() => {
    render(<URLForm />);
  });

  it("renders form elements", () => {
    const urlInput = screen.getByPlaceholderText("https://example.com");
    const createButton = screen.getByText("CREATE SHORT URL");

    expect(urlInput).toBeInTheDocument();
    expect(createButton).toBeInTheDocument();
  });

  it("displays an error message for invalid URL", async () => {
    const urlInput = screen.getByPlaceholderText("https://example.com");
    const createButton = screen.getByText("CREATE SHORT URL");

    fireEvent.change(urlInput, { target: { value: "invalid-url" } });
    fireEvent.click(createButton);

    await waitFor(() => {
      const errorMessageElement = screen.getByText("Please introduce a valid URL");
      expect(errorMessageElement).toBeInTheDocument();
    });
  });
});
