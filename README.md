# Santi Culinary Public

Front público para `santivillaabrille.com`.

Este proyecto usa la misma tecnología base del dashboard:

- Vercel Functions en `/api`
- MongoDB Atlas mediante `MONGO_URI` y `MONGO_DB`
- React desde CDN
- Ant Design desde CDN
- CSS propio con el estilo visual del dashboard

## Variables de entorno en Vercel

Configurar las mismas variables de Mongo que usa el dashboard:

```txt
MONGO_URI
MONGO_DB
```

## Endpoint público

```txt
/api/content
```

Devuelve solo contenido público según estas reglas:

- `type: "published"`
- o `status: "publicado"`
- o `published.web.enabled: true`

No incluye endpoints de escritura, login ni edición.

## Deploy

```bash
git add .
git commit -m "init: create public culinary front"
git push
```

Luego crear proyecto nuevo en Vercel y apuntar el dominio principal.
