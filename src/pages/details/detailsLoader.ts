import { getPackage } from "../../api/queries/getPackage";
import type { PackageDetails } from "../../api/types/PackageDetails";
import type { Params } from "react-router-dom";

interface LoaderArgs {
  params: Params;
}

export interface DetailsLoaderResults {
  details: PackageDetails;
}

export async function detailsLoader({
  params,
}: LoaderArgs): Promise<DetailsLoaderResults> {
  const { name } = params;
  if (!name) {
    throw new Error("Name must be provided");
  }

  const details = await getPackage(name);

  return {
    details,
  };
}
