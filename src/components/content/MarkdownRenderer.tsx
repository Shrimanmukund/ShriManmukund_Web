import React from 'react';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  content,
  className = '',
}) => {
  if (!content) return null;

  // Split into paragraphs / blocks
  const blocks = content.split('\n\n');

  return (
    <div className={`prose-medical space-y-4 ${className}`}>
      {blocks.map((block, index) => {
        const trimmed = block.trim();
        if (!trimmed || trimmed === '---') return null;

        // Skip metadata header blocks
        if (
          trimmed.startsWith('# ') ||
          trimmed.startsWith('**URL:**') ||
          trimmed.startsWith('**Cluster:**') ||
          trimmed.startsWith('**Meta title:**') ||
          trimmed.startsWith('**Meta description:**') ||
          trimmed.startsWith('**Author Byline')
        ) {
          return null;
        }

        // Heading 2
        if (trimmed.startsWith('## ')) {
          const headingText = trimmed.replace(/^##\s+/, '').trim();
          if (['hero', 'related content', 'related'].includes(headingText.toLowerCase())) {
            return null;
          }
          const id = slugifyHeading(headingText);
          return (
            <h2
              id={id}
              key={index}
              className="font-serif text-xl sm:text-2xl font-bold text-[#1B3A5B] pt-4 pb-1 border-b border-[#6B7F5F]/15 scroll-mt-24"
            >
              {headingText}
            </h2>
          );
        }

        // Heading 3
        if (trimmed.startsWith('### ')) {
          const headingText = trimmed.replace(/^###\s+/, '').trim();
          if (['headline', 'author byline'].includes(headingText.toLowerCase())) {
            return null;
          }
          return (
            <h3 key={index} className="font-serif text-lg sm:text-xl font-bold text-[#122844] pt-2">
              {headingText}
            </h3>
          );
        }

        // Heading 4
        if (trimmed.startsWith('#### ')) {
          return (
            <h4 key={index} className="font-serif text-base font-semibold text-[#5C4F3A]">
              {trimmed.replace(/^####\s+/, '').trim()}
            </h4>
          );
        }

        // Unordered List
        if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
          const items = trimmed.split('\n').filter((l) => l.startsWith('- ') || l.startsWith('* '));
          return (
            <ul key={index} className="space-y-1.5 list-disc pl-5 text-sm sm:text-base text-[#2D2A20]">
              {items.map((item, itemIdx) => {
                const itemText = item.replace(/^[-*]\s+/, '');
                return (
                  <li key={itemIdx} dangerouslySetInnerHTML={{ __html: renderInlineFormatting(itemText) }} />
                );
              })}
            </ul>
          );
        }

        // Numbered List
        if (/^\d+\.\s+/.test(trimmed)) {
          const items = trimmed.split('\n').filter((l) => /^\d+\.\s+/.test(l));
          return (
            <ol key={index} className="space-y-1.5 list-decimal pl-5 text-sm sm:text-base text-[#2D2A20]">
              {items.map((item, itemIdx) => {
                const itemText = item.replace(/^\d+\.\s+/, '');
                return (
                  <li key={itemIdx} dangerouslySetInnerHTML={{ __html: renderInlineFormatting(itemText) }} />
                );
              })}
            </ol>
          );
        }

        // Standard Paragraph
        return (
          <p
            key={index}
            className="text-sm sm:text-base text-[#2D2A20] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: renderInlineFormatting(trimmed) }}
          />
        );
      })}
    </div>
  );
};

function renderInlineFormatting(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-[#1B3A5B]">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
    .replace(/`(.*?)`/g, '<code class="bg-[#E5EBDD] px-1.5 py-0.5 rounded text-xs text-[#1B3A5B] font-mono">$1</code>');
}
