import React from 'react';
import Img from './Img';
import Profile from './Profile';
import Date from './Date';


const Twitter = ({ twidata }) => {
  // const statuses = twidata.statuses;
  // console.log(statuses);



  // let t_url = "";
  // if (typeof(statuses.retweeted_status) != "undefined") {
  //   console.log(statuses.retweeted_status.id_str);
  //   const t_id_str = statuses.retweeted_status.id_str;
  //   t_url = `https://mobile.twitter.com/i/web/status/${t_id_str}`;
  //   console.log(t_url);

  // } else if (typeof(statuses) != "undefined") {
  //   const t_id_str = statuses.id_str;
  //   t_url = `https://mobile.twitter.com/i/web/status/${t_id_str}`;
  //   console.log(t_url);
  // }


  return (
    <ul>
      {
        twidata === "" ? "now.loading" : twidata.statuses.map((item, index) => (
          // この中での親タグでまとめる必要あり
          <li key={index}>
              <Profile profdata={item} />
            <a href={item}>
              <p>{item.user["name"]}</p>
              <p>{item.user["screen_name"]}</p>
              <p>{item.text}</p>
              <Img imgdata={item} />
              <Date date={item} />
            </a>
          </li>
        ))
      }
      {/* <p>{item.user["name"]}</p> */}
      {/* <p>{JSON.stringify(twidata)}</p> */}
    </ul>
  );
};
export default Twitter;