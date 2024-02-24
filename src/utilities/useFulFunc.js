export function extractYoutubeId(link) {
  if (!link) return "no-link";
  const regex = /(?:.be\/|\/watch\?v=|\/(?=p\/))([\w\/\-]+)/;
  const match = link.match(regex);
  console.log(match[1]);
  return match ? match[1] : "";
}
