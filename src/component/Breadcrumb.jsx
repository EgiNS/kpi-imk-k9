import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const formatBreadcrumb = (str) => {
    return str
      .replace(/-/g, ' ') // Ganti strip dengan spasi
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Kapital di huruf pertama
  };

  return (
    <nav className="flex text-gray-700 mb-4 text-base" aria-label="Breadcrumb">
        <div className='inline'>
            <Link to="/" className="hover:underline">
                Beranda
            </Link>
            {pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;

                return (
                <span key={to}>
                    <span className="mx-2">></span>
                    {isLast ? (
                    <span className="font-medium">{formatBreadcrumb(value)}</span>
                    ) : (
                    <Link to={to} className="hover:underline">
                        {formatBreadcrumb(value)}
                    </Link>
                    )}
                </span>
                );
            })}
        </div>
    </nav>
  );
};

export default Breadcrumbs;