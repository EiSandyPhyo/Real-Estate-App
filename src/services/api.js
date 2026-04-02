// src/services/api.js
const BASE_URL = "https://69cee35d33a09f831b7e0eef.mockapi.io/api/v1/listings";

export const getListings = async () => {
  const response = await fetch(BASE_URL);
  if (!response.ok) throw new Error("Failed to fetch listings");
  return response.json();
};