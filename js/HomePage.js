window.HomePage = function HomePage(){
  const {
    App,
    Button,
    Card,
    Col,
    Empty,
    Row,
    Space,
    Spin,
    Tag,
    Typography,
    message
  } = antd;

  const {
    InstagramOutlined,
    TikTokOutlined,
    YoutubeOutlined
  } = icons;

  const {
    useEffect,
    useMemo,
    useState
  } = React;

  const [items,setItems] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    async function load(){
      try{
        setLoading(true);
        const data = await fetchPublicContent();
        setItems(data || []);
      }catch(err){
        console.error(err);
        message.error(err.message || "Error al cargar contenido");
      }finally{
        setLoading(false);
      }
    }

    load();
  },[]);

  const featuredItems = useMemo(() => {
    return items.slice(0, 12);
  },[items]);

  function getPrimaryUrl(item){
    return (
      item.published?.web?.url ||
      item.published?.youtube?.url ||
      item.published?.youtubeShort?.url ||
      item.published?.instagram?.url ||
      item.published?.tiktok?.url ||
      item.links?.youtube ||
      item.links?.instagram ||
      item.links?.tiktok ||
      ""
    );
  }

  function getPlatforms(item){
    const published = item.published || {};

    return Object.entries(published)
      .filter(([,value]) => value?.enabled)
      .map(([key]) => key);
  }

  function renderPlatformIcon(platform){
    if(platform === "instagram") return <InstagramOutlined />;
    if(platform === "tiktok") return <TikTokOutlined />;
    if(platform === "youtube" || platform === "youtubeShort") return <YoutubeOutlined />;
    return null;
  }

  return (
    <App>
      <main className="site-shell">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Culinary Creator</p>

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
            <p className="hero-card-title">Santi Villa Abrille</p>
            <p>Culinary Creator</p>
            <p className="hero-card-muted">
              Published recipes and process notes from the dashboard.
            </p>
          </Card>
        </section>

        <section className="content-section">
          <div className="section-header">
            <div>
              <p className="eyebrow">Published work</p>
              <h2>Latest recipes and videos</h2>
            </div>
          </div>

          {loading ? (
            <div className="loading-box">
              <Spin />
            </div>
          ) : featuredItems.length ? (
            <Row gutter={[18,18]}>
              {featuredItems.map(item => {
                const primaryUrl = getPrimaryUrl(item);
                const platforms = getPlatforms(item);

                return (
                  <Col xs={24} sm={12} lg={8} xl={6} key={item.id}>
                    <Card
                      className={`content-card ${item.coverImage ? "has-cover" : ""}`}
                      style={item.coverImage ? {
                        "--cover-image": `url(${item.coverImage})`
                      } : {}}
                    >
                      <div className="content-card-inner">
                        <Space wrap className="card-tags">
                          <Tag>{item.category || "recipe"}</Tag>
                          {platforms.map(platform => (
                            <Tag key={platform}>
                              {renderPlatformIcon(platform)} {platform}
                            </Tag>
                          ))}
                        </Space>

                        <Typography.Title level={3}>
                          {item.title}
                        </Typography.Title>

                        <p className="card-goal">
                          {item.goal || item.recipe?.result || "Published culinary project."}
                        </p>

                        {primaryUrl && (
                          <Button
                            type="primary"
                            href={primaryUrl}
                            target="_blank"
                          >
                            View project
                          </Button>
                        )}
                      </div>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          ) : (
            <Empty description="Todavía no hay contenido público." />
          )}
        </section>
      </main>
    </App>
  );
};
