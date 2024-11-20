import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { SearchResultSummary } from "./SearchResultsSummary/SearchResultsSummary";
import { SearchResults } from "./SearchResults/SearchResults";

export function Search() {
    return (
        <div>
            <NavBar/>
            <SearchResultSummary/>
            <SearchResults/>
        </div>
    )
}