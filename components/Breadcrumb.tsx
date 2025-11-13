import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRightIcon } from './icons/ChevronRightIcon';

interface BreadcrumbItem {
  name: string;
  path: string;
}

export const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbNameMap: Record<string, string> = {
    'how-it-works': 'How It Works',
    'features': 'Features',
    'why-what-if': 'Why What-If',
    'faq': 'FAQ',
    'privacy-policy': 'Privacy Policy',
  };

  if (pathnames.length === 0) {
    return null; // Don't show breadcrumbs on home page
  }

  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Home', path: '/' },
    ...pathnames.map((_, index) => {
      const path = `/${pathnames.slice(0, index + 1).join('/')}`;
      const name = breadcrumbNameMap[pathnames[index]] || pathnames[index];
      return { name, path };
    }),
  ];

  return (
    <nav aria-label="Breadcrumb" className="pt-24 pb-2">
      <ol className="container mx-auto px-6 flex items-center space-x-2 text-sm">
        {breadcrumbs.map((breadcrumb, index) => {
          const isLast = index === breadcrumbs.length - 1;
          
          return (
            <li key={breadcrumb.path} className="flex items-center">
              {index > 0 && (
                <ChevronRightIcon className="w-4 h-4 mx-2 text-gray-400" />
              )}
              {isLast ? (
                <span className="text-purple-600 font-semibold" aria-current="page">
                  {breadcrumb.name}
                </span>
              ) : (
                <Link
                  to={breadcrumb.path}
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  {breadcrumb.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
