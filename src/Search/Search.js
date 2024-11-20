import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { SearchResultSummary } from "./SearchResultsSummary/SearchResultsSummary";

export function Search() {
    return (
        <div>
            <NavBar/>
            <SearchResultSummary/>
        </div>
    )
}