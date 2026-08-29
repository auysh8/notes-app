import type { Note } from "../types";

const formatTimeAgo = (noteData: Note) => {
  if (!noteData) {
    return "";
  }
  const secounds = Math.floor(
    (Date.now() - new Date(noteData.lastEdited).getTime()) / 1000,
  );
  let interval = Math.floor(secounds / 31536000);
  if (interval >= 1) return interval + "y ago";

  interval = Math.floor(secounds / 2592000);
  if (interval >= 1) return interval + "m ago";

  interval = Math.floor(secounds / 86400);
  if (interval >= 1) return interval + "d ago";

  interval = Math.floor(secounds / 3600);
  if (interval >= 1) return interval + "h ago";

  interval = Math.floor(secounds / 60);
  if (interval >= 1) return interval + "min ago";

  return "just now";
};

export { formatTimeAgo };
