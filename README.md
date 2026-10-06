# OpenSuperLab

Website for **OpenSuperLab**, an open source research collective. Built with React + Vite and hosted as a static site on AWS S3.

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs to dist/
npm run preview    # serve the production build locally (dist/index.html can also be opened directly)
```

## Editing content

No CMS needed — content lives in plain JS files:

| What | File |
| --- | --- |
| Labs (name, status, focus areas, repo, colour) | [src/data/labs.js](src/data/labs.js) |
| Research (papers, datasets, software, blog posts) | [src/data/research.js](src/data/research.js) |
| Logo / icon | [public/favicon.svg](public/favicon.svg) and [src/components/Logo.jsx](src/components/Logo.jsx) |

Each lab gets its own page at `#/labs/<slug>`, listing the research items whose `lab` field matches.

## Deploy to AWS S3

Requires the [AWS CLI](https://aws.amazon.com/cli/) configured with credentials (`aws configure`) and a bash shell (Git Bash on Windows).

**1. One-time bucket setup** (bucket names must be globally unique):

```bash
S3_BUCKET=opensuperlab-site AWS_REGION=us-east-1 bash scripts/setup-s3.sh
```

This creates the bucket, enables static website hosting and adds a public-read bucket policy. The site uses hash URLs (e.g. `/#/labs/agents`), so no server-side rewrite rules are needed.

**2. Build and deploy** (every time you change the site):

```bash
S3_BUCKET=opensuperlab-site npm run deploy
```

On PowerShell:

```powershell
$env:S3_BUCKET="opensuperlab-site"; npm run deploy
```

The site is then live at `http://<bucket>.s3-website-<region>.amazonaws.com`.

### HTTPS and a custom domain (recommended)

S3 website endpoints are HTTP only. For HTTPS and a domain like `opensuperlab.org`:

1. Request a certificate in **ACM** (region `us-east-1`).
2. Create a **CloudFront** distribution with the S3 website endpoint as origin, attach the certificate, and add your domain as an alternate name.
3. Point your domain at the distribution (Route 53 alias or CNAME).
4. Deploy with `CLOUDFRONT_DISTRIBUTION_ID=<id>` set so the cache is invalidated.

## License

Code: MIT · Content: CC BY 4.0
