const Img = ({ imgdata }) => {
  // console.log(typeof(imgdata.entities));
  // console.log(imgdata);

  let imgurl = "";
  if (typeof (imgdata.entities.media) !== "undefined") {
    imgurl = imgdata.entities.media[0].media_url;
  } else if (typeof (imgdata.retweeted_status) !== "undefined") {
    if (typeof (imgdata.retweeted_status.entities.media) !== "undefined") {
      imgurl = imgdata.retweeted_status.entities.media[0].media_url;
    }
  }

  return (
    // <p>aaaa</p>
    <div>
      {

        imgurl == "" 
        ? ""
        : <img src={imgurl} />
      
        // typeof(imgdata.entities.media) !== "undefined" 
        // ? <img src={imgdata.entities.media[0].media_url} /> 
        // :typeof(imgdata.retweeted_status) !== "undefined"
        //  ? typeof(imgdata.retweeted_status.entities.media) !== "undefined"
        //  ? <img src={imgdata.retweeted_status.entities.media[0].media_url} />
        //   :''
        //   :''
      }
    </div>
  );
};
export default Img;