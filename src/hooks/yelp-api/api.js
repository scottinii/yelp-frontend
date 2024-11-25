import { API_BASE_URL, BEARER_TOKEN } from "./config";
import queryString from "query-string";

export function get(path, queryParams) {
    const query = queryString.stringify(queryParams);
    const url = `${API_BASE_URL}${path}?${query}`;
    console.log("Making request to:", url);

    return fetch(url, {
        headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            Origin: "localhost",
            withCredentials: true,
        },
    }).then((response) => {
        console.log("Response status:", response.status);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Ensure response is valid JSON
    }).catch((error) => {
        console.error("Error fetching data:", error.message);
        throw error;
    });
}
