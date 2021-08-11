import React, { useState } from 'react';
import jsonplaceholder from "../apis/jsonplaceholder";
import Button from "./Button";
import Resources from "./Resources";

const Test = ({ Title }) => {
const [resources,setResources]=useState([]);
const getPosts=async()=> {
  try {
    const posts = await jsonplaceholder.get('/posts');
    setResources(posts.data);

  }catch (err) {
    console.log(err);
  }
}
const getAlbums=async()=> {
  try {
    const alubums = await jsonplaceholder.get('/albums');
    setResources(alubums.data);
  }catch (err) {
    console.log(err);
  }
}
  return (
    <div className="ui container" style={{marginTop: 30}}>
      <p>{ Title }</p>
      <Button onClick={getPosts} color="primary" text="posts"/>
      <Button onClick={getAlbums} color="red" text="alubums"/>
      <Resources resources={resources}/>
    </div>
  );
};
export default Test;
