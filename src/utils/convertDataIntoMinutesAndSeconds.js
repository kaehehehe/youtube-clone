export const convertDataIntoMinutesAndSeconds = (data) => {
  const arr = data.slice(2).split('M');

  if (arr.length === 2) {
    let [min, sec] = arr;
    sec = sec.slice(0, -1);
    if (sec === '') sec = 0;
    return sec < 10 ? `${min}:0${sec}` : `${min}:${sec}`;
  } else {
    let [sec] = arr;
    sec = sec.slice(0, -1);
    return sec < 10 ? `0:0${sec}` : `0:${sec}`;
  }
};
