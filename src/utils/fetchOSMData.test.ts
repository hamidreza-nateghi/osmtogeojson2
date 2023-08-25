/**
 * @author
 * Hamidreza Nateghi
 */
import { waitFor } from "@testing-library/react";
import { fetchOSMData } from "./fetchOSMData";

globalThis.fetch = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});

test("fetch", async () => {
  const mockResponse = new Response("<osm>...</osm>", { status: 200 });
  const mockParser = new DOMParser();

  globalThis.fetch.mockResolvedValue(mockResponse);
  jest.spyOn(window, "DOMParser").mockReturnValue(mockParser);

  const data = fetchOSMData({
    minLon: 20,
    minLat: 20,
    maxLon: 20.1,
    maxLat: 20.1,
  });

  waitFor(() => {
    console.log(data);
    // expect(data)
  });

  // expect(button).toBe("hi");
});
