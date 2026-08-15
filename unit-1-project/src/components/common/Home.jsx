import React from "react";

function Home(props) {
  return (
    <div>
      <h1>Onyx Reflection</h1>
      <p><em>Your personal space for mindful reflection.</em></p>
            {props.children}
    </div>
  );
}

export default Home;