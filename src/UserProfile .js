import { useState } from "react";

function UserProfile(Props) {
  return (
    <div className="UserProfile">
      <h1>Name : {Props.name} <br/> Bio : {Props.bio}</h1>
      <br/>
    </div>
  )

}
export default UserProfile ;