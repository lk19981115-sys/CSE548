"use client";

import React from 'react';
import ChapterDivider from "@/components/ui/ChapterDivider";

export default function Slide_Chapter1() {
  const titleNode = (
    <div className="flex flex-col gap-4">
      <span className="font-extrabold text-slate-900 tracking-tight leading-tight">
        Hong Kong Construction Industry:
      </span>
      <span className="text-5xl font-bold text-slate-500 tracking-wide">
        Climate Challenges
      </span>
    </div>
  );

  return (
    <ChapterDivider 
      chapterNumber="01" 
      title={titleNode} 
      member={{ name: "Cao Zhirui", id: "25062119g" }}
    />
  );
}
