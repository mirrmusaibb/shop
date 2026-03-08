import Head from "next/head";
import { BUSINESS, LOCAL_SEO_KEYWORDS } from "@/utils/constants";
import { withBasePath } from "@/utils/assetPath";

type SeoHeadProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  includeSchema?: boolean;
};

const BASE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://mirrmusaibb.github.io").replace(/\/$/, "");
const EXTERNAL_URL = /^(?:[a-z]+:)?\/\//i;

export const SeoHead = ({ title, description, path = "/", image = "/images/hero-tailoring.svg", includeSchema = true }: SeoHeadProps) => {
  const canonicalPath = withBasePath(path);
  const sitePath = withBasePath("/");
  const imagePath = withBasePath(image);

  const canonical = `${BASE_URL}${canonicalPath}`;
  const imageUrl = EXTERNAL_URL.test(image) ? image : `${BASE_URL}${imagePath}`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS.name,
    description,
    url: `${BASE_URL}${sitePath}`,
    telephone: BUSINESS.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address,
      addressLocality: "Achabal",
      addressRegion: "Jammu and Kashmir",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.coordinates.lat,
      longitude: BUSINESS.coordinates.lng,
    },
    sameAs: [BUSINESS.instagramUrl, BUSINESS.mapsUrl],
    areaServed: "Kashmir",
    image: imageUrl,
    priceRange: "INR 250 - INR 5000+",
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={LOCAL_SEO_KEYWORDS.join(", ")} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#08090A" />

      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={BUSINESS.name} />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {includeSchema ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      ) : null}
    </Head>
  );
};
