import { useLoaderData } from "react-router-dom";
import type { SearchLoaderResult } from "./searchLoader";
import PackageListemItem from "../../components/PackageListItem";

export default function SearchPage() {
  const { searchResults } = useLoaderData() as SearchLoaderResult;
  const renderedResults = searchResults.map((result) => (
    <PackageListemItem pack={result} key={result.name} />
  ));
  return (
    <div>
      <h1 className="text-2xl font-bold my-6">Search Results</h1>
      <div className="space-y-4 mt-4">{renderedResults}</div>
    </div>
  );
}
