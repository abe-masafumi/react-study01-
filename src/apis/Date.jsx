const Date = ({ date }) => {

  // console.log(date);

  function JpTime(objTime) {
    const date01 = objTime;
    const s = date01.split(' ');
    const t = s[3].split(':');
    const h = parseInt(t[0]) + 9;
    s[3] = h + ":" + t[1] + ":" + t[2];
    const jptime = s[0] + " " + s[1] + " " + s[2] + " " + s[3] + " " + s[4] + " " + s[5];
    return jptime;
  }

  const twidate = date.created_at;
  // console.log(twidate);

  return (
    <>
      <p>{twidate}</p>
    </>
  );
};

export default Date;