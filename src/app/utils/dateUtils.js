import dayjs from 'dayjs';

export const getLiveDateTime = () => {
  const now = dayjs();
  return {
    date: now.format('MMMM D, YYYY'),
    time: now.format('h:mm:ss A'),
  };
};
