export function extractYoutubeId(link) {
  if (!link) return "no-link";
  const regex = /(?:.be\/|\/watch\?v=|\/(?=p\/))([\w\/\-]+)/;
  const match = link.match(regex);
  console.log(match[1]);
  return match ? match[1] : "";
}

export function convertToReadableDate(timestamp) {
  // Parse the timestamp string into a Date object
  const dateObj = new Date(timestamp);

  // Extract date components
  const year = dateObj.getFullYear();
  const month = ("0" + (dateObj.getMonth() + 1)).slice(-2); // Adding 1 because getMonth() returns zero-based month index
  const day = ("0" + dateObj.getDate()).slice(-2);
  const hours = ("0" + dateObj.getHours()).slice(-2);
  const minutes = ("0" + dateObj.getMinutes()).slice(-2);
  const seconds = ("0" + dateObj.getSeconds()).slice(-2);

  // Format the date components into a readable date string
  const readableDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  return readableDate;
}

export function convertToReadableDateNotLong(timestamp) {
  // Parse the timestamp string into a Date object
  const dateObj = new Date(timestamp);

  // Extract date components
  const year = dateObj.getFullYear();
  const month = ("0" + (dateObj.getMonth() + 1)).slice(-2); // Adding 1 because getMonth() returns zero-based month index
  const day = ("0" + dateObj.getDate()).slice(-2);

  // Format the date components into a readable date string
  const readableDate = `${year}-${month}-${day}`;

  return readableDate;
}

// Example usage:
const timestamp = "2024-02-24T18:49:45.277Z";
const readableDate = convertToReadableDate(timestamp);
console.log(readableDate); // Output: 2024-02-24
