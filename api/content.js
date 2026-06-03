import { MongoClient } from "mongodb";

let cachedClient = null;

async function connectToMongo() {
  if (cachedClient) return cachedClient;

  if (!process.env.MONGO_URI) {
    throw new Error("Falta variable de entorno MONGO_URI");
  }

  const client = new MongoClient(process.env.MONGO_URI);
  await client.connect();

  cachedClient = client;
  return client;
}

function sanitizeProject(project) {
  return {
    id: project.id || String(project._id),
    type: project.type || "project",
    title: project.title || "Sin título",
    status: project.status || "",
    category: project.category || "general",
    goal: project.goal || "",
    coverImage: project.coverImage || "",
    baseIds: project.baseIds || [],
    published: project.published || {},
    recipe: {
      ingredients: project.recipe?.ingredients || [],
      steps: project.recipe?.steps || [],
      result: project.recipe?.result || ""
    },
    notes: project.notes || [],
    links: project.links || {},
    createdAt: project.createdAt || "",
    updatedAt: project.updatedAt || ""
  };
}

export default async function handler(req, res) {
  try {
    if (req.method !== "GET") {
      return res.status(405).json({
        error: "Método no permitido"
      });
    }

    const client = await connectToMongo();
    const db = client.db(process.env.MONGO_DB);
    const collection = db.collection("projects");

    const query = {
      $or: [
        { type: "published" },
        { status: "publicado" },
        { "published.web.enabled": true }
      ]
    };

    const items = await collection
      .find(query)
      .sort({ updatedAt: -1, createdAt: -1 })
      .toArray();

    return res.status(200).json(
      items.map(sanitizeProject)
    );

  } catch (err) {
    return res.status(500).json({
      error: err.message,
      name: err.name
    });
  }
}
