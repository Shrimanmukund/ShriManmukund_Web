import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { generateBreadcrumbSchema } from '@/lib/seo/schemas';

interface BreadcrumbsProps {
  items: Array<{ name: string; url: string }>;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const schema = generateBreadcrumbSchema([{ name: 'Home', url: '/' }, ...items]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="py-3 text-xs text-[#5C4F3A]">
        <ol className="flex items-center flex-wrap gap-1.5">
          <li className="flex items-center">
            <Link href="/" className="hover:text-[#1B3A5B] flex items-center gap-1 transition">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
          </li>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.url} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-[#A69880]" />
                {isLast ? (
                  <span className="font-semibold text-[#1B3A5B] truncate max-w-[200px] sm:max-w-none">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.url} className="hover:text-[#1B3A5B] transition truncate max-w-[150px] sm:max-w-none">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};
