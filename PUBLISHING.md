# Publishing Guide

This guide will help you publish the `react-llm-rtf` package to npm.

## Prerequisites

1. **npm Account**: You need an npm account. Create one at [npmjs.com](https://www.npmjs.com/signup)
2. **npm CLI**: Make sure npm is installed (comes with Node.js)

## Step-by-Step Publishing Process

### 1. Login to npm

First, login to your npm account via the CLI:

```bash
npm login
```

Enter your:
- Username
- Password
- Email
- OTP (if you have 2FA enabled)

Verify you're logged in:

```bash
npm whoami
```

### 2. Update Package Information

Before publishing, update the following in `package.json`:

```json
{
  "name": "react-llm-rtf",
  "version": "1.0.0",
  "author": "Your Name <your.email@example.com>",
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/react-llm-rtf.git"
  }
}
```

Replace:
- `Your Name` with your actual name
- GitHub URLs with your repository URLs

### 3. Check Package Name Availability

Make sure the package name is available:

```bash
npm search react-llm-rtf
```

If it's taken, you'll need to choose a different name or use a scoped package (e.g., `@yourorg/react-llm-rtf`).

### 4. Test the Package Locally

Before publishing, test the package locally:

```bash
# Build the package
npm run build

# Test that it works
npm pack
```

This creates a `.tgz` file you can test in another project:

```bash
cd /path/to/test/project
npm install /path/to/react-llm-rtf/react-llm-rtf-1.0.0.tgz
```

### 5. Run Tests

Make sure all tests pass:

```bash
npm test
```

### 6. Verify Package Contents

Check what will be published:

```bash
npm pack --dry-run
```

This shows all files that will be included in the package.

### 7. Publish to npm

When you're ready to publish:

```bash
npm publish
```

For a scoped package (if you want to use `@yourorg/react-llm-rtf`):

```bash
npm publish --access public
```

### 8. Verify Publication

After publishing, verify it's available:

```bash
npm info react-llm-rtf
```

Visit your package page:
```
https://www.npmjs.com/package/react-llm-rtf
```

### 9. Test Installation

Test that users can install it:

```bash
npm install react-llm-rtf
```

## Publishing Updates

### Patch Release (Bug fixes)

```bash
npm version patch  # 1.0.0 -> 1.0.1
npm publish
```

### Minor Release (New features, backward compatible)

```bash
npm version minor  # 1.0.0 -> 1.1.0
npm publish
```

### Major Release (Breaking changes)

```bash
npm version major  # 1.0.0 -> 2.0.0
npm publish
```

## Unpublishing (Use with Caution)

If you need to unpublish within 72 hours of publishing:

```bash
npm unpublish react-llm-rtf@1.0.0
```

**Note**: Unpublishing is discouraged and only works within 72 hours. Use deprecation instead:

```bash
npm deprecate react-llm-rtf@1.0.0 "This version has been deprecated"
```

## GitHub Integration

### 1. Create a GitHub Repository

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/react-llm-rtf.git
git push -u origin main
```

### 2. Create a Release on GitHub

When you publish a new version:

1. Go to your GitHub repository
2. Click "Releases" → "Create a new release"
3. Tag version: `v1.0.0`
4. Release title: `v1.0.0 - Initial Release`
5. Add release notes
6. Publish release

### 3. Add Badges to README

Update your README.md with the actual npm package URL after publishing.

## CI/CD with GitHub Actions (Optional)

Create `.github/workflows/publish.yml`:

```yaml
name: Publish to npm

on:
  release:
    types: [created]

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          registry-url: 'https://registry.npmjs.org'
      - run: npm ci
      - run: npm run build
      - run: npm test
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

Add your npm token to GitHub Secrets:
1. Generate token: https://www.npmjs.com/settings/[username]/tokens
2. Add to GitHub: Settings → Secrets → New repository secret
3. Name: `NPM_TOKEN`

## Best Practices

1. **Always test before publishing**
2. **Follow semantic versioning** (semver.org)
3. **Write clear changelogs**
4. **Update documentation** with each release
5. **Tag releases** in Git
6. **Use npm scripts** for consistency
7. **Test in multiple React versions** before major releases

## Troubleshooting

### "You do not have permission to publish"

- Make sure you're logged in: `npm whoami`
- Check if package name is taken
- Use a scoped package: `@yourusername/react-llm-rtf`

### "Package already exists"

- Choose a different name
- Or use a scoped package

### "Version already exists"

- Increment version: `npm version patch/minor/major`

### "Missing required fields"

- Check package.json has all required fields:
  - name
  - version
  - description
  - main
  - license

## Support

If you encounter issues:

1. Check npm documentation: https://docs.npmjs.com/
2. npm support: https://www.npmjs.com/support
3. GitHub issues: Your repository issues page

## Quick Publish Checklist

- [ ] Update version number
- [ ] Update author information
- [ ] Update repository URLs
- [ ] Run `npm run build`
- [ ] Run `npm test`
- [ ] Update README.md
- [ ] Update CHANGELOG.md (create if needed)
- [ ] Commit all changes
- [ ] `npm login`
- [ ] `npm publish`
- [ ] Create GitHub release
- [ ] Test installation: `npm install react-llm-rtf`
- [ ] Celebrate! 🎉
