# Frontity - Now builder FORKED from [Frontity now-builder](https://github.com/frederikNordahl/now-builder)

This builder attempts to stay updated with vercel and NodeJS version 22, so it will work with SWR and caching.

## Before deploying

1. Create this `vercel.json` file in your project and change the site url:

```json
{
  "builds": [
    {
      "src": "package.json",
      "use": "@dwinaya/frontity-vercel-builder"
    }
  ]
}
```

2. Follow the rest of the guide on [Deploy Frontity using Vercel](https://gitbook-docs.frontity.org/deployment/deploy-using-vercel)
