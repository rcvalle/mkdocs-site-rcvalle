export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const newUrl = url.toString().replace('https://rcvalle.com/notes', 'https://publish.obsidian.md/serve?url=rcvalle.com/notes');
    const resp = await fetch(newUrl);
    return new Response(resp.body, resp);
  },
};
