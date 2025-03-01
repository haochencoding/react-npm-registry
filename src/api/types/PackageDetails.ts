export interface PackageDetails {
  name: string;
  description: string;
  license: string;
  readme: string;
  author: {
    email: string;
    name: string;
  };
  maintainers: {
    email: string;
    name: string;
  }[];
}
