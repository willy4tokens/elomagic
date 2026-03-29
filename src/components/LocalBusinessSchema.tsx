interface LocalBusinessSchemaProps {
  name?: string;
  city?: string;
  state?: string;
  phone?: string;
  url?: string;
}

const LocalBusinessSchema = ({
  name = "Elo Marketing",
  city = "Los Angeles",
  state = "CA",
  phone = "+18185748339",
  url = "https://www.elo-magic.com",
}: LocalBusinessSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name,
    address: {
      "@type": "PostalAddress",
      addressLocality: city,
      addressRegion: state,
      addressCountry: "US",
    },
    telephone: phone,
    url,
    areaServed: {
      "@type": "State",
      name: "California",
    },
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default LocalBusinessSchema;
