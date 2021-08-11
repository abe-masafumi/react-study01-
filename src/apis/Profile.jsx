const Profile = ({ profdata }) => {
  // console.log(profdata);
  let userimg = "";
  if (typeof(profdata.retweeted_status) != "undefined") {
     userimg = profdata.retweeted_status.user.profile_image_url;
  } else if (typeof(profdata.user) != "undefined") {
     userimg = profdata.user.profile_image_url;
  }

  return (
    <div>
    <img src={userimg} alt="aaa"/>
    </div>
  );
};
export default Profile;