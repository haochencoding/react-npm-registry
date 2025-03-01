import type { PackageSummary } from "../types/PackageSummary";

interface SearchResponse {
  objects: {
    package: {
      name: string;
      description: string;
      version: string;
      keywords: string[];
    };
  }[];
  total: number;
  time: string;
}

export async function searchPackages(term: string): Promise<PackageSummary[]> {
  const res = await fetch(
    `https://registry.npmjs.org/-/v1/search?text=${term}`,
    {
      method: "GET",
    }
  );

  const data: SearchResponse = await res.json();
  const packages = data.objects.map(
    ({ package: { name, description, version, keywords } }) => {
      return {
        name,
        description,
        version,
        keywords,
      };
    }
  );

  return packages;
}
