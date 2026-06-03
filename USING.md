### Using This Portfolio

This project is maintained with npm. Keep `package-lock.json` as the only dependency lockfile.

### Running Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

### Making Changes

Portfolio content is centralized in:

```text
data/portfolio.ts
```

Use that file for profile information, SEO metadata, navigation links, social links, skills and projects.

To customize colors, update:

```text
tailwind.config.js
```

To replace stable public assets like the avatar, update files in:

```text
public/assests
```

### Validating Changes

Run these checks before opening a pull request:

```bash
npm run lint
npm run typecheck
npm run build
npm test
npm run test:e2e
```

### Deploying

Deploy through Vercel:

1. Open the Vercel dashboard.
2. Import this repository.
3. Keep the default Next.js settings.
4. Deploy the project.
