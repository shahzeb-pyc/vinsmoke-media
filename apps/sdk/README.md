# Vinsmoke Media Node.js SDK

This is the Node.js SDK for [Vinsmoke Media](https://app.vinsmokemedia.online).

You can start by installing the package:

```bash
npm install @postiz/node
```

> Note: the SDK package name (`@postiz/node`) and the `Postiz` class name are unchanged from upstream in this release. Only the docs and branding around them have been updated for Vinsmoke Media; renaming the package is a separate, breaking change.

## Usage
```typescript
import Postiz from '@postiz/node';
const postiz = new Postiz('your api key', 'your Vinsmoke Media instance URL (optional)');
```

The available methods are:
- `post(posts: CreatePostDto)` - Schedule a post to Vinsmoke Media
- `postList(filters: GetPostsDto)` - Get a list of posts
- `upload(file: Buffer, extension: string)` - Upload a file to Vinsmoke Media
- `integrations()` - Get a list of connected channels
- `deletePost(id: string)` - Delete a post by ID

Alternatively you can use the SDK with curl; see the API docs in the [Vinsmoke Media repository](https://github.com/shahzeb-pyc/vinsmoke-media) for more information.
