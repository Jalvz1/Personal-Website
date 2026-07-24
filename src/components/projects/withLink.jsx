// Renders a plain string, turning ONE substring into an external link.
// link = { text, url }. If there's no link or the substring isn't found,
// the original string is returned unchanged.
export function withLink(text, link) {
  if (!link?.url || !link?.text || !text.includes(link.text)) return text;
  const i = text.indexOf(link.text);
  return (
    <>
      {text.slice(0, i)}
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline underline-offset-2 hover:text-blue-800"
      >
        {link.text}
      </a>
      {text.slice(i + link.text.length)}
    </>
  );
}
