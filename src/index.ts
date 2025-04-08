import { Hono } from "hono";
import puppeteer from "@cloudflare/puppeteer";

const app = new Hono<{ Bindings: CloudflareBindings }>();

app.get("/message", (c) => {
  return c.text("Hello Hono!");
});

app.post("/url", async (c) => {
  const { url } = await c.req.json();
  const browser = await puppeteer.launch(c.env.MY_BROWSER);
  const page = await browser.newPage();
  await page.goto(url);
  const htmlPage = await page.content();
  await browser.close();
  // get slug from url
  const cleanUrl = url.endsWith("/") ? url.slice(0, -1) : url;
  const slug = cleanUrl.split("/").pop();

  // get hostname
  const hostname = url.split("/")[2];

  const key = `${hostname}/${slug}.html`;
  await c.env.R2.put(key, htmlPage);
  return c.json({ message: "success" });
});

app.post("/search/ai", async (c) => {
  const { query } = await c.req.json();

  const answer = await c.env.AI.AutoRAG("autorag-demo").aiSearch({
    query: query,
  });
  return c.json({ response: answer });
});

app.post("/search", async (c) => {
  const { query } = await c.req.json();

  const answer = await c.env.AI.AutoRAG("autorag-demo").search({
    query: query,
  });
  return c.json({ response: answer });
});

export default app;
