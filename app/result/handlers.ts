export const useHandlers = () => {
  const formatTimeDifference = (start: number, end: number) => {
    const timeDiffInSeconds = Math.floor((end - start) / 1000);

    const hours = Math.floor(timeDiffInSeconds / 3600);
    const minutes = Math.floor((timeDiffInSeconds % 3600) / 60);
    const seconds = timeDiffInSeconds % 60;

    const formattedTimeArray = [
      hours > 0 ? `${hours}시간` : null,
      minutes > 0 ? `${minutes}분` : null,
      seconds > 0 || (hours === 0 && minutes === 0) ? `${seconds}초` : null,
    ].filter(Boolean);

    return formattedTimeArray.join(' ');
  };

  return { formatTimeDifference };
};
