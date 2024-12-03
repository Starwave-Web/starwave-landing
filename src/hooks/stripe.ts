"use client"
import { useState, useEffect } from "react";

export const useStripePrices = () => {
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const res = await fetch("/api/prices", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!res.ok) {
          throw new Error("Failed to fetch prices");
        }
        const data = await res.json();
        setPrices(data.data); // Assuming 'data' contains the list of prices
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPrices();
  }, []);

  return { prices, loading, error };
};
