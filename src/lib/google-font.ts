const truetypeSource = /src: url\((.+?)\) format\('(?:opentype|truetype)'\)/;

export const loadGoogleFont = async (
  family: string,
  weight: number,
  text: string,
  style: 'normal' | 'italic' = 'normal'
) => {
  const axis = style === 'italic' ? `ital,wght@1,${weight}` : `wght@${weight}`;
  const cssUrl = `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, '+')}:${axis}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(cssUrl)).text();
  const fontUrl = css.match(truetypeSource)?.[1];
  if (!fontUrl) {
    throw new Error(`Could not load the ${family} font from Google Fonts`);
  }

  return (await fetch(fontUrl)).arrayBuffer();
};
