import logo from "./logo.svg";
import "./App.scss";

function App() {
  const socialMedia = {
    whatsapp: "https://wa.me/+380967741539",
    telegram: "https://t.me/nazarbuzyl",
    instagram: "https://www.instagram.com/_nazarbuzyl_/",
    phone: "tel:+4915116991299",
    twitter: "https://twitter.com/NBuzyl",
    facebook: "https://www.facebook.com/nazarbuzyl/",
    github: "https://github.com/NazarBuzyl",
  };
  const profile = {
    name: "Nazar Buzyl",
    age: "16",
    country: "aus der Ukraine",
    birthday: "06.07.2005",
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="profile">
        <h1 className="profile__h1">Hallo!</h1>
        <p className="profile__text">
          Ich heiße {profile.name}. Ich bin {profile.country} gekommen. Ich bin
          am {profile.birthday} geboren.
        </p>
      </div>
      <div className="social-media">
        {Object.keys(socialMedia).map((socialMediaId) => (
          <div className="social-media__item">
            <a href={socialMedia[socialMediaId]} className="social-media__link">
              <img
                className="social-media__img"
                src={"./icons8-" + socialMediaId + ".gif"}
                alt={socialMediaId}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
