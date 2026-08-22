# CHP Backend

NestJS API for authentication, user management, folders, and image assets. See the
[root README](../README.md) for full setup instructions (Supabase, migrations, bootstrap admin).

## Scripts

```bash
npm run start:dev           # dev server with watch mode, http://localhost:3001
npm run build                # production build to dist/
npm run start:prod           # run the production build
npm run lint                  # eslint

npm run prisma:generate      # regenerate Prisma client after schema changes
npm run prisma:migrate       # create + apply a new migration (dev)
npm run prisma:migrate:deploy # apply pending migrations (CI/prod)
npm run prisma:studio        # Prisma Studio GUI
npm run seed:admin           # bootstrap the first SUPER_ADMIN from env vars
```

Swagger docs: `http://localhost:3001/api/docs`.
