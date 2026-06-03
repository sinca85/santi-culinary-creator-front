window.HomePage = function HomePage(){

  return (
    <main className="site-shell">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">
            Culinary Creator
          </p>

          <h1>
            Chocolate, recipes, mistakes and process.
          </h1>

          <p className="hero-subtitle">
            Trying things. Making mistakes. Learning.
          </p>

          <p className="hero-description">
            Bonbons • desserts • recipes • behind the scenes
          </p>

          <div className="hero-links">
            <a
              className="hero-button"
              href="https://www.instagram.com/santivillabrille.creator/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>

            <a
              className="hero-button"
              href="https://www.youtube.com/@santivillabrille.creator"
              target="_blank"
              rel="noreferrer"
            >
              YouTube
            </a>

            <a
              className="hero-button"
              href="https://www.tiktok.com/@santivillaabrille"
              target="_blank"
              rel="noreferrer"
            >
              TikTok
            </a>
          </div>
        </div>

        <div className="hero-card hero-image-card">
          <img
            src="./assets/story_final.png"
            alt="Santi Villa Abrille"
            className="hero-image"
          />
        </div>
      </section>
    </main>
  );

};