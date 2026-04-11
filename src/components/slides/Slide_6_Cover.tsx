"use client";

import React from 'react';
import ChapterDivider from '@/components/ui/ChapterDivider';

export default function Slide_6_Cover() {
  const titleNode = (
    <div className="flex flex-col gap-4">
      <span className="font-extrabold text-slate-900 tracking-tight leading-tight">Financial Impacts &</span>
      <span className="font-extrabold text-slate-900 tracking-tight leading-tight">Response Measures</span>
    </div>
  );

  return (
    <ChapterDivider
      chapterNumber="06"
      title={titleNode}
    />
  );
}