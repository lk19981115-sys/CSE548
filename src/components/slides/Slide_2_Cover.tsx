"use client";

import React from 'react';
import ChapterDivider from '@/components/ui/ChapterDivider';

export default function Slide_2_Cover() {
  const titleNode = (
    <div className="flex flex-col gap-4">
      <span className="font-extrabold text-slate-900 tracking-tight leading-tight">
        Climate Risk Analysis & Economic Impact
      </span>
      <span className="text-3xl font-normal text-slate-500 tracking-wide">
        on HK Construction Industry (2023)
      </span>
    </div>
  );

  return (
    <ChapterDivider 
      chapterNumber="02"
      title={titleNode}
    />
  );
}