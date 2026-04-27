import { ChevronRight, Home } from 'lucide-react';
import { useEffect } from 'react';

export function Breadcrumb() {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.motilaloswal.com' },
    { name: 'MO MCP Server', url: 'https://mcp.motilaloswal.com', current: true },
  ];

  useEffect(() => {
    // Add JSON-LD structured data for SEO
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': breadcrumbItems.map((item, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'name': item.name,
        'item': item.url,
      })),
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <nav
      id="product"
      aria-label="Breadcrumb"
      className="hidden lg:block bg-white border-b border-gray-200 mt-20 scroll-mt-20"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />
              )}
              {item.current ? (
                <span
                  className="text-gray-900 font-medium flex items-center gap-1.5"
                  aria-current="page"
                >
                  {index === 0 && <Home className="h-4 w-4" />}
                  {item.name}
                </span>
              ) : (
                <a
                  href={item.url}
                  className="text-gray-600 hover:text-[#2B2E8C] transition-colors flex items-center gap-1.5"
                >
                  {index === 0 && <Home className="h-4 w-4" />}
                  {item.name}
                </a>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
