import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "7igdybch",
  dataset: "blogs",
  apiVersion: "2026-05-15",
  useCdn: false,
});
