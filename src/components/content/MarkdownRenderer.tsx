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

interface Block {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'ul' | 'ol' | 'blockquote' | 'hr' | 'p';
  content?: string;
  items?: string[];
  id?: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  content,
  className = '',
}) => {
  if (!content) return null;

  // Normalize line breaks
  const rawLines = content.replace(/\r\n/g, '\n').split('\n');
  const blocks: Block[] = [];
  let currentParagraph: string[] = [];
  let currentList: { type: 'ul' | 'ol'; items: string[] } | null = null;
  let currentQuote: string[] = [];

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      const text = currentParagraph.join(' ').trim();
      if (text) {
        blocks.push({ type: 'p', content: text });
      }
      currentParagraph = [];
    }
  };

  const flushList = () => {
    if (currentList && currentList.items.length > 0) {
      blocks.push({
        type: currentList.type,
        items: [...currentList.items],
      });
      currentList = null;
    }
  };

  const flushQuote = () => {
    if (currentQuote.length > 0) {
      const text = currentQuote.join(' ').trim();
      if (text) {
        blocks.push({ type: 'blockquote', content: text });
      }
      currentQuote = [];
    }
  };

  const flushAll = () => {
    flushParagraph();
    flushList();
    flushQuote();
  };

  for (let i = 0; i < rawLines.length; i++) {
    const rawLine = rawLines[i];
    const trimmed = rawLine.trim();

    // Skip metadata header lines
    if (
      trimmed.startsWith('**URL:**') ||
      trimmed.startsWith('**Cluster:**') ||
      trimmed.startsWith('**Meta title:**') ||
      trimmed.startsWith('**Meta description:**') ||
      trimmed.startsWith('**Author Byline')
    ) {
      continue;
    }

    // Empty line separates blocks
    if (!trimmed) {
      flushAll();
      continue;
    }

    // Horizontal Rule
    if (trimmed === '---' || trimmed === '***' || trimmed === '___') {
      flushAll();
      blocks.push({ type: 'hr' });
      continue;
    }

    // Blockquote
    if (trimmed.startsWith('>')) {
      flushParagraph();
      flushList();
      const quoteLine = trimmed.replace(/^>\s*/, '');
      currentQuote.push(quoteLine);
      continue;
    } else if (currentQuote.length > 0) {
      flushQuote();
    }

    // Heading 1 (# ) - usually ignored or rendered as H1
    if (trimmed.startsWith('# ')) {
      flushAll();
      const headingText = trimmed.replace(/^#\s+/, '').trim();
      if (!['hero', 'related content', 'related'].includes(headingText.toLowerCase())) {
        blocks.push({ type: 'h1', content: headingText, id: slugifyHeading(headingText) });
      }
      continue;
    }

    // Heading 2 (## )
    if (trimmed.startsWith('## ')) {
      flushAll();
      const headingText = trimmed.replace(/^##\s+/, '').trim();
      if (!['hero', 'related content', 'related'].includes(headingText.toLowerCase())) {
        blocks.push({ type: 'h2', content: headingText, id: slugifyHeading(headingText) });
      }
      continue;
    }

    // Heading 3 (### )
    if (trimmed.startsWith('### ')) {
      flushAll();
      const headingText = trimmed.replace(/^###\s+/, '').trim();
      if (!['headline', 'author byline', 'table of contents'].includes(headingText.toLowerCase())) {
        blocks.push({ type: 'h3', content: headingText, id: slugifyHeading(headingText) });
      }
      continue;
    }

    // Heading 4 (#### )
    if (trimmed.startsWith('#### ')) {
      flushAll();
      const headingText = trimmed.replace(/^####\s+/, '').trim();
      blocks.push({ type: 'h4', content: headingText });
      continue;
    }

    // Unordered List (- or *)
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      flushParagraph();
      flushQuote();
      const itemText = trimmed.replace(/^[-*]\s+/, '').trim();
      if (currentList && currentList.type === 'ul') {
        currentList.items.push(itemText);
      } else {
        flushList();
        currentList = { type: 'ul', items: [itemText] };
      }
      continue;
    }

    // Ordered List (1. 2. etc)
    if (/^\d+\.\s+/.test(trimmed)) {
      flushParagraph();
      flushQuote();
      const itemText = trimmed.replace(/^\d+\.\s+/, '').trim();
      if (currentList && currentList.type === 'ol') {
        currentList.items.push(itemText);
      } else {
        flushList();
        currentList = { type: 'ol', items: [itemText] };
      }
      continue;
    }

    // Plain text line
    flushList();
    flushQuote();
    currentParagraph.push(trimmed);
  }

  flushAll();

  return (
    <div className={`prose-medical space-y-4 text-[#2D2A20] ${className}`}>
      {blocks.map((block, index) => {
        if (block.type === 'hr') {
          return <hr key={index} className="my-8 border-t border-[#6B7F5F]/20" />;
        }

        if (block.type === 'h1') {
          return (
            <h1
              id={block.id}
              key={index}
              className="font-serif text-2xl sm:text-3xl font-bold text-[#1B3A5B] pt-4 pb-1 border-b border-[#6B7F5F]/15 scroll-mt-24"
            >
              {block.content}
            </h1>
          );
        }

        if (block.type === 'h2') {
          return (
            <h2
              id={block.id}
              key={index}
              className="font-serif text-xl sm:text-2xl font-bold text-[#1B3A5B] pt-6 pb-1 border-b border-[#6B7F5F]/15 scroll-mt-24"
            >
              {block.content}
            </h2>
          );
        }

        if (block.type === 'h3') {
          return (
            <h3
              id={block.id}
              key={index}
              className="font-serif text-lg sm:text-xl font-bold text-[#122844] pt-4"
            >
              {block.content}
            </h3>
          );
        }

        if (block.type === 'h4') {
          return (
            <h4 key={index} className="font-serif text-base font-semibold text-[#5C4F3A] pt-2">
              {block.content}
            </h4>
          );
        }

        if (block.type === 'blockquote') {
          return (
            <blockquote
              key={index}
              className="my-4 pl-4 py-2 border-l-4 border-[#6B7F5F] bg-[#F4F6F0] rounded-r text-[#3B3A36] italic text-base leading-relaxed"
              dangerouslySetInnerHTML={{ __html: renderInlineFormatting(block.content || '') }}
            />
          );
        }

        if (block.type === 'ul') {
          return (
            <ul key={index} className="space-y-2 list-disc pl-6 text-base text-[#2D2A20] leading-relaxed my-3">
              {block.items?.map((item, itemIdx) => (
                <li
                  key={itemIdx}
                  dangerouslySetInnerHTML={{ __html: renderInlineFormatting(item) }}
                />
              ))}
            </ul>
          );
        }

        if (block.type === 'ol') {
          return (
            <ol key={index} className="space-y-2 list-decimal pl-6 text-base text-[#2D2A20] leading-relaxed my-3">
              {block.items?.map((item, itemIdx) => (
                <li
                  key={itemIdx}
                  dangerouslySetInnerHTML={{ __html: renderInlineFormatting(item) }}
                />
              ))}
            </ol>
          );
        }

        if (block.type === 'p') {
          return (
            <p
              key={index}
              className="text-base text-[#2D2A20] leading-relaxed my-3"
              dangerouslySetInnerHTML={{ __html: renderInlineFormatting(block.content || '') }}
            />
          );
        }

        return null;
      })}
    </div>
  );
};

function renderInlineFormatting(text: string): string {
  return text
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-[#6B7F5F] underline hover:text-[#1B3A5B] font-medium transition-colors">$1</a>')
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-[#1B3A5B]">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
    .replace(/`(.*?)`/g, '<code class="bg-[#E5EBDD] px-1.5 py-0.5 rounded text-xs text-[#1B3A5B] font-mono">$1</code>');
}
