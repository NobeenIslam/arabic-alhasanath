type LegalSection = {
  heading: string;
  paragraphs?: string[];
  items?: string[];
};

type LegalDocumentProps = {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
};

const LegalDocument = ({
  title,
  lastUpdated,
  intro,
  sections,
}: LegalDocumentProps) => (
  <article className="mx-auto max-w-3xl px-6 pt-32 pb-24">
    <h1 className="text-4xl font-bold sm:text-5xl">{title}</h1>
    <p className="mt-4 text-sm text-muted-foreground">{lastUpdated}</p>
    <p className="mt-8 leading-relaxed text-muted-foreground">{intro}</p>
    {sections.map((section) => (
      <section key={section.heading} className="mt-10">
        <h2 className="text-2xl font-semibold">{section.heading}</h2>
        {section.paragraphs?.map((paragraph) => (
          <p
            key={paragraph}
            className="mt-4 leading-relaxed text-muted-foreground"
          >
            {paragraph}
          </p>
        ))}
        {section.items ? (
          <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
            {section.items.map((item) => (
              <li key={item} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        ) : null}
      </section>
    ))}
  </article>
);

export { LegalDocument };
export type { LegalDocumentProps, LegalSection };
