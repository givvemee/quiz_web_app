'use client';

import { useServerInsertedHTML } from 'next/navigation';
import { ReactNode } from 'react';
import { getCssText } from './stitches.config';

export function ServerStylesheet({ children }: { children: ReactNode }) {
  useServerInsertedHTML(() => {
    return (
      <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
    );
  });

  return children;
}
