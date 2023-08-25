/**
 * @author
 * Hamidreza Nateghi
 */
import { render, screen } from "@testing-library/react";
import { DataForm } from "./DataForm";
import { Map } from "./Map";

it("renders label and input", () => {
  render(
    <Map geojsonData={null}>
      <DataForm />
    </Map>
  );
  const button = screen.getByRole("button", {
    name: /submit/i,
  });

  expect(button).toBeInTheDocument();
});
