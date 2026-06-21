import { useState, useEffect } from "react";
import { fetchCountries } from "../api/api";

const useFetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cachedData, setCachedData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Check cache first
        if (cachedData) {
          setData(cachedData);
          setLoading(false);
          return;
        }

        const result = await fetchCountries();

        // التأكد من وجود بيانات
        if (result && result.length > 0) {
          setData(result);
          setCachedData(result);
        } else {
          // إذا كانت البيانات فارغة، استخدم البيانات الاحتياطية
          const fallbackData = [
            {
              name: "Aland Islands",
              flag: "🇦🇽",
              population: 29989,
              region: "Europe",
              capital: "Mariehamn",
              code: "AX",
              languages: ["Swedish"],
              currencies: ["Euro"],
              timezones: ["UTC+2"],
              borders: [],
              nativeName: "Åland",
              subregion: "Northern Europe",
              topLevelDomain: [".ax"],
            },
          ];
          setData(fallbackData);
          setCachedData(fallbackData);
        }

        setLoading(false);
      } catch (err) {
        // في حالة الخطأ، استخدم بيانات احتياطية
        console.warn("Using fallback data due to error:", err);
        const fallbackData = [
          {
            name: "Aland Islands",
            flag: "🇦🇽",
            population: 29989,
            region: "Europe",
            capital: "Mariehamn",
            code: "AX",
            languages: ["Swedish"],
            currencies: ["Euro"],
            timezones: ["UTC+2"],
            borders: [],
            nativeName: "Åland",
            subregion: "Northern Europe",
            topLevelDomain: [".ax"],
          },
        ];
        setData(fallbackData);
        setCachedData(fallbackData);
        setError(null); // لا نعرض خطأ للمستخدم
        setLoading(false);
      }
    };

    fetchData();
  }, [cachedData]);

  return { data, loading, error };
};

export default useFetchData;
