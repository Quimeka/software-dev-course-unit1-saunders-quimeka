
function Home(props) {
  return (
    <div className="main">
      <section>
        <h3 id="OneLiner">Welcome to Your Safe Haven.</h3>
        <p id="introText">
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