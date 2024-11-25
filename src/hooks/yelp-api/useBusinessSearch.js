import { useState, useEffect } from "react";
import * as api from "./api";

export function useBusinessSearch(initialTerm, initialLocation) {
    const [businesses, setBusinesses] = useState([]);
    const [amountResults, setAmountResults] = useState(0);
    const [searchParams, setSearchParams] = useState({
        term: initialTerm,
        location: initialLocation,
    });

    useEffect(() => {
        if (!searchParams.term || !searchParams.location) {
            console.warn("Search parameters are incomplete.");
            return;
        }

        const fetchData = async () => {
            try {
                console.log("Fetching data with:", searchParams);
                const rawData = await api.get("/businesses/search", searchParams);
                console.log("Raw data:", rawData);
                if (rawData && rawData.businesses) {
                    setBusinesses(rawData.businesses);
                    setAmountResults(rawData.total);
                } else {
                    console.warn("No businesses found in the response.");
                }
            } catch (e) {
                console.error("Error fetching data:", e.message);
            }
        };

        fetchData();
    }, [searchParams]);

    // Define a `performSearch` function to update searchParams
    const performSearch = (newParams) => {
        setSearchParams((prev) => ({
            ...prev,
            ...newParams,
        }));
    };

    return [businesses, amountResults, performSearch];
}