/**
 * @author
 * Hamidreza Nateghi
 */
import { render, screen } from "@testing-library/react";
import { TextField } from "./TextField";

it("renders label and input", () => {
  render(<TextField label="Min Longitude" id="minLon" />);
  const labelElement = screen.getByText("Min Longitude");
  const inputElement = screen.getByRole("textbox", {
    name: /min longitude/i,
  });

  expect(labelElement).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();
});
