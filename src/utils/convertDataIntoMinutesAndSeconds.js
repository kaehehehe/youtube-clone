export const convertDataIntoMinutesAndSeconds = (data) => {
  const arr = data.slice(2).replace('M', '*').split('*');

  if (arr.length === 2) {
    let [min, sec] = arr;
    sec = sec.slice(0, -1);
    if (sec === '') sec = '00';
    return `${min}:${sec}`;
  } else {
    let [sec] = arr;
    sec = sec.slice(0, -1);
    return `0:${sec}`;
  }
};
