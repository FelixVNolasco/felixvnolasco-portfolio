## Contributing Guide

This project uses npm and Conventional Commits.

### Installing Dependencies

```bash
npm install
```

### Creating a Branch

```bash
git checkout -b feat/my-change
```

### Starting the App

```bash
npm run dev
```

### Quality Checks

Run these before opening a pull request:

```bash
npm run lint
npm run typecheck
npm run build
npm test
npm run test:e2e
```

### Commit Messages

Use Conventional Commits because Commitlint and the release workflow depend on this format.

Valid examples:

```text
feat: add project data source
fix: correct contact aria labels
chore: configure tests
```

### Creating a Pull Request

```bash
git add .
git commit -m "feat: describe your change"
git push origin feat/my-change
```

Open a pull request from your branch and describe the proposed changes.

## License

This project is licensed under the MIT License. See `LICENSE` for details.
