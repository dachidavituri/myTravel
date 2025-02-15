import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export const formatDate = (time: string) => {
  const now = dayjs();
  const postDate = dayjs(time);
  const oneDay = now.diff(postDate, "day") < 1;
  const timePassed = postDate.fromNow();
  const fullDate = postDate.format("HH:mm - DD/MM/YYYY");
  return { oneDay, timePassed, fullDate };
};
