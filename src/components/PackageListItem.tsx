import type { PackageSummary } from "../api/types/PackageSummary";
import { Link } from "react-router-dom";

interface PackageListemItemProps {
  pack: PackageSummary;
}

export default function PackageListemItem({ pack }: PackageListemItemProps) {
  const renderedKeywords = (pack.keywords || []).map((keyword) => (
    <div
      key={keyword}
      className="border py-0.5 px-1 text-xs bg-slate-200 rounded"
    >
      {keyword}
    </div>
  ));

  const packageUrl = `/packages/${pack.name}`;
  return (
    <div className="border border-gray-400 p-4 rounded flex justify-between items-center">
      <div className="flex flex-col gap-2">
        <Link to={packageUrl} className="text-xl font-bold">
          {pack.name}
        </Link>
        <p className="text-sm text-gray-500">{pack.description}</p>
        <div className="flex gap-1 flex-wrap">{renderedKeywords}</div>
      </div>
      <div className="mr-6">
        <Link
          to={packageUrl}
          className="py-2 px-3 rounded bg-black text-white text-lg"
        >
          View
        </Link>
      </div>
    </div>
  );
}
