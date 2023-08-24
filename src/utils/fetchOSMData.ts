export type BBox = {
  minLon: number;
  minLat: number;
  maxLon: number;
  maxLat: number;
};

export async function fetchOSMData(bbox: BBox) {
  const { minLon, minLat, maxLon, maxLat } = bbox;

  const response = await fetch(
    `https://www.openstreetmap.org/api/0.6/map/?bbox=${minLon},${minLat},${maxLon},${maxLat}`
  );
  const text = await response.text();

  if (!response.ok) throw new Error(text);

  const parser = new DOMParser();
  return parser.parseFromString(text, "application/xml");
}
