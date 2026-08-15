import React from "react";

function Home(props) {
  return (
    <div>
      <h1>Onyx Reflection</h1>
      <p><em>Your personal space for mindful reflection.</em></p>

      <section className="Introduction">
        <h2>Welcome to your sanctuary.</h2>
        <p>
          {/*This content was generated with AI*/}
          Onyx Reflection is a secure, private space designed to help you 
          process your thoughts, cultivate gratitude, and find clarity. 
          Whether you are unpacking a busy day or setting intentions for 
          tomorrow, your words stay entirely yours. Take a deep breath, 
          log in, and begin your journey inward.
        </p>
      </section>
      {props.children}
    </div>
  );
}

export default Home;