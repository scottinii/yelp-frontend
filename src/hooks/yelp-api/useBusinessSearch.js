import { useState, useEffect } from "react";
import * as api from "./api";

export function useBusinessSearch(term, location) {
    const [businesses, setBusinesses] = useState([]);
    const [amountResults, setAmountResults] = useState();
    const [searchParams, setSearchParams] = useState({ term, location });

    useEffect(() => {
        if (!searchParams.term || !searchParams.location) {
            console.warn("Search parameters are incomplete.");
            return;
        }

        const fetchData = async () => {
            try {
                const rawData = await api.get("/businesses/search", searchParams);
                if (rawData && rawData.businesses) {
                    setBusinesses(rawData.businesses);
                    setAmountResults(rawData.total);
                }
            } catch (e) {
                console.error("Error fetching data:", e.message);
            }
        };

        fetchData();
    }, [searchParams]);

    // Perform search function
    const performSearch = ({ term, location }) => {
        setSearchParams({ term, location });
    };

    return [businesses, amountResults, performSearch]; // Ensure `performSearch` is returned
}

