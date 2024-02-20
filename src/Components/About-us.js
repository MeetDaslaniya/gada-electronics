const Aboutus = () => {
  return (
    <div>
      <div className="about-section">
        <h1>About Us Page</h1>
        <p>
          Gada Electronics is the electronics owned by Jethalal Champaklal Gada.
        </p>
        <p>
          Nattu Kaka, Bagha, and Magan are employees of the Gada Electronics who
          help in managing it.
        </p>
        <h2 className="div-card-aboutus">Our Team</h2>
        <div className="row">
          <div className="column">
            <div className="card1">
              <img
              src="https://i.zoomtventertainment.com/story/dilip_joshi_movies.jpg"
                
                alt="Jethalal"
                className="about-us-img"
              />
              <div className="container">
                <h2>Jethalal Gada</h2>
                <p className="title">CEO & Founder</p>
                <p>Jethalal Champaklal Gada is the owner of Gada Electronics.</p>
                <p>Jethalal6985@example.com</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card1">
              <img
                src="https://www.india.com/wp-content/uploads/2014/12/tarak-0123.jpg"
                alt="Jane"
                className="about-us-img"
              />
              <div className="container">
                <h2>The Great Bagha</h2>
                <p className="title">CTO</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>bagha1568@example.com</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card1">
              <img
                src="https://static.toiimg.com/thumb/msid-86753921,width-400,resizemode-4/86753921.jpg"
                alt="Nattukaka"
                className="about-us-img"
              />
              <div className="container">
                <h2>Nattu Kaka</h2>
                <p className="title">Finance Manager</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>Nattu5153@example.com</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Aboutus;
