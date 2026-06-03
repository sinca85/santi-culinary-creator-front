window.HomePage = function HomePage(){
  const {
    App,
    Button,
    Card,
    Space
  } = antd;

  const {
    InstagramOutlined,
    TikTokOutlined,
    YoutubeOutlined
  } = icons;

  return (
    <App>
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

            <Space wrap className="hero-links">
              <Button
                href="https://www.instagram.com/santivillabrille.creator/"
                target="_blank"
                icon={<InstagramOutlined />}
              >
                Instagram
              </Button>

              <Button
                href="https://www.youtube.com/@santivillabrille.creator"
                target="_blank"
                icon={<YoutubeOutlined />}
              >
                YouTube
              </Button>

              <Button
                href="https://www.tiktok.com/@santivillaabrille"
                target="_blank"
                icon={<TikTokOutlined />}
              >
                TikTok
              </Button>
            </Space>
          </div>

          <Card className="hero-card">
            <p className="hero-card-title">
              Santi Villa Abrille
            </p>

            <p>
              Culinary Creator
            </p>

            <p className="hero-card-muted">
              Bonbons, desserts, recipes and process.
            </p>
          </Card>
        </section>
      </main>
    </App>
  );
};