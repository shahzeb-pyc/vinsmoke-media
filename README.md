# Vinsmoke Media

**Vinsmoke Media** is a self-hosted social media management platform for scheduling, automating, and analyzing your content.

The hosted app runs at [https://app.vinsmokemedia.online](https://app.vinsmokemedia.online).

Vinsmoke Media is a fork of [Postiz](https://github.com/gitroomhq/postiz-app), rebranded for Vinsmoke Media. There is no hosted "cloud" edition of this fork — you run it on your own infrastructure.

<p align="center">
<a href="https://opensource.org/license/agpl-v3">
  <img src="https://img.shields.io/badge/License-AGPL%203.0-blue.svg" alt="License">
</a>
</p>

## Features

- Schedule all your social media posts (many AI features)
- Measure your work with analytics
- Collaborate with other team members to exchange or buy posts
- Invite your team members to collaborate, comment, and schedule posts
- Perfect for automation (API) with platforms like n8n, Make.com, Zapier, etc.

Schedule posts to: Instagram, YouTube, TikTok, Facebook, X, LinkedIn, Reddit, Pinterest, Threads, Slack, Discord, Mastodon, Bluesky, and Dribbble.

## Tech Stack

- Pnpm workspaces (Monorepo)
- Next.js (React)
- NestJS
- Prisma (default: PostgreSQL)
- Temporal
- Resend (email notifications)

## Quick Start

Copy `.env.example` to `.env` and fill in the required values. Set `FRONTEND_URL` to your app URL (for the hosted app: `https://app.vinsmokemedia.online`), then start everything with Docker Compose:

```bash
docker compose up -d
```

For local development, see `docker-compose.dev.yaml`.

## Node.js SDK

The Node.js SDK is published as `@postiz/node`:

```bash
npm install @postiz/node
```

```typescript
import Postiz from '@postiz/node';
const postiz = new Postiz('your api key', 'your self-hosted instance (optional)');
```

> Note: the SDK package name (`@postiz/node`) and the `Postiz` class name are unchanged from upstream in this release. Only the docs and branding around them have been updated for Vinsmoke Media; renaming the package is a separate, breaking change. See [`apps/sdk/README.md`](apps/sdk/README.md).

## Compliance

- This repository contains the self-hosted edition of Vinsmoke Media, forked from the open-source Postiz project.
- The app uses official, platform-approved OAuth flows.
- Vinsmoke Media does not automate or scrape content from social media platforms.
- Vinsmoke Media does not collect, store, or proxy API keys or access tokens from users.
- Vinsmoke Media never asks users to paste API keys into the product.
- Users always authenticate directly with the social platform (e.g., X, Discord, etc.), ensuring platform compliance and data privacy.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Contributions are licensed under the same AGPL-3.0 license as the rest of the project; there is no separate contributor agreement.

## License

This repository's source code is available under the [AGPL-3.0 license](LICENSE). As required by the AGPL, everyone who uses the app over the network is offered the Corresponding Source: this repository, [github.com/shahzeb-pyc/vinsmoke-media](https://github.com/shahzeb-pyc/vinsmoke-media).
