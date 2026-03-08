const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
const EXTERNAL_URL = /^(?:[a-z]+:)?\/\//i;

export const withBasePath = (path: string): string => {
  if (!path) {
    return BASE_PATH || "";
  }

  if (EXTERNAL_URL.test(path) || path.startsWith("data:") || path.startsWith("#")) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalizedPath}`;
};
