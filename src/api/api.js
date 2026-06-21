const API_BASE_URL = "https://city-state-country.vercel.app/countries";

export const fetchCountries = async () => {
  try {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch countries");
    }
    const data = await response.json();
    console.log(data);
    return transformData(data);
  } catch (error) {
    throw new Error(error.message);
  }
};

const transformData = (data) => {
  return data.map((country) => ({
    name: country.name || "Unknown",
    flag: `https://flagcdn.com/w320/${country.iso2.toLowerCase()}.png`,
    population: country.population || 0,
    region: country.region || "Unknown",
    capital: country.iso2 || "N/A",
    code: country.code || "",
    languages: country.languages || [],
    currencies: country.currencies || [],
    timezones: country.timezones || [],
    borders: country.borders || [],
    nativeName: country.name || "",
    subregion: country.subregion || "",
    topLevelDomain: country.topLevelDomain || [],
  }));
};
