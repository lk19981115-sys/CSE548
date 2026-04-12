import ChapterDivider from "@/components/ui/ChapterDivider";

export default function Slide_3_Cover() {
  return (
    <ChapterDivider
      chapterNumber="03"
      title={
        <div className="flex flex-col gap-4 items-start">
          <span className="font-extrabold text-slate-800">Physical Risk Assessment</span>
          <span className="font-normal text-slate-500 text-4xl tracking-normal">Chronic Climate Change</span>
        </div>
      }
      member={{ name: "ZHOU Jingya", id: "25042867g" }}
    />
  );
}