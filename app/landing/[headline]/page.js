import { notFound } from 'next/navigation';

// This function generates the metadata for each page
export async function generateMetadata({ params }) {
  const headline = decodeURIComponent(params.headline);
  
  return {
    title: `${headline} | Your Site Name`,
    description: `Learn more about ${headline} on our website.`,
    // Add more metadata as needed
  };
}

// This function generates the static params for all pages
export async function generateStaticParams() {
  // In a real scenario, you'd fetch this data from an API or database
  const headlines = [
    'best-products-2024',
    'top-services-in-your-area',
    'expert-tips-and-tricks',
    '1',
    // Add more headlines as needed
  ];

  return headlines.map((headline) => ({
    headline: headline,
  }));
}

// This is the actual page component
export default function HeadlinePage({ params }) {
  const headline = decodeURIComponent(params.headline);

  // If the headline doesn't exist, return a 404
  if (!headline) {
    notFound();
  }

  return (
    <div>
      <h1>{headline.replace(/-/g, ' ')}</h1>
      {/* Add your page content here */}
    </div>
  );
}