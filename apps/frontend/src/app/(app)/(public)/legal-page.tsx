import { ReactNode } from 'react';

// Shared presentational shell for the public legal pages.
// Copy is hardcoded English on purpose: the legal pages are not translated
// (translation files are owned by a separate workstream).
export type LegalSection = {
  heading: string;
  body: ReactNode;
};

export function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <article className="mx-auto w-full max-w-[860px] px-[20px] py-[40px]">
      <h1 className="text-[32px] font-bold leading-tight">{title}</h1>
      <p className="mt-[8px] text-[14px] text-textItemBlur">
        Last updated: {updated}
      </p>
      <div className="mt-[12px] h-[3px] w-[64px] rounded-full bg-btnPrimary" />
      <p className="mt-[24px] text-[16px] leading-[1.7]">{intro}</p>
      {sections.map((section) => (
        <section key={section.heading} className="mt-[32px]">
          <h2 className="text-[20px] font-semibold">{section.heading}</h2>
          <div className="mt-[12px] flex flex-col gap-[12px] text-[15px] leading-[1.7] [&_ul]:list-disc [&_ul]:ps-[20px] [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-[8px] [&_a]:text-btnPrimary [&_a]:hover:text-btnPrimaryHover [&_a]:underline">
            {section.body}
          </div>
        </section>
      ))}
    </article>
  );
}
