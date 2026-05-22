import { API } from "../../types";
import { RSSCache, RSSData, RSSItem } from "./types";

export async function fetchRSSFeed(
  data: RSSData,
  loader: API["loader"],
): Promise<RSSCache> {
  if (!data.feedUrl) {
    return {
      timestamp: Date.now(),
      items: [],
      error: "No feed URL configured",
    };
  }

  loader.push();
  try {
    // Use allorigins CORS proxy to fetch RSS
    const corsProxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(data.feedUrl)}`;

    console.log("Fetching RSS feed from:", data.feedUrl);
    console.log("Using CORS proxy:", corsProxyUrl);

    const response = await fetch(corsProxyUrl);

    // Check if CORS proxy returned an error
    if (!response.ok) {
      console.error(
        "CORS proxy HTTP error:",
        response.status,
        response.statusText,
      );
      return {
        timestamp: Date.now(),
        items: [],
        error: `CORS proxy error: ${response.status} ${response.statusText}`,
      };
    }

    const jsonData = await response.json();

    // Verify the response has the expected structure
    if (!jsonData.contents) {
      console.error("Unexpected CORS proxy response structure:", jsonData);
      return {
        timestamp: Date.now(),
        items: [],
        error: "Invalid response from CORS proxy",
      };
    }

    // Parse the XML response
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(jsonData.contents, "text/xml");

    // Check for parse errors
    if (xmlDoc.getElementsByTagName("parsererror").length > 0) {
      console.error("XML parse error in feed");
      return {
        timestamp: Date.now(),
        items: [],
        error: "Failed to parse RSS feed (XML parse error)",
      };
    }

    // Extract items from feed
    const items: RSSItem[] = [];
    const itemElements = xmlDoc.querySelectorAll("item");

    Array.from(itemElements)
      .slice(0, data.maxItems)
      .forEach((itemEl) => {
        const titleEl = itemEl.querySelector("title");
        const linkEl = itemEl.querySelector("link");
        const pubDateEl = itemEl.querySelector("pubDate");

        if (titleEl && linkEl) {
          items.push({
            title: titleEl.textContent || "",
            link: linkEl.textContent || "",
            pubDate: pubDateEl?.textContent,
          });
        }
      });

    // If we got items, success
    if (items.length > 0) {
      console.log("Successfully loaded RSS feed with", items.length, "items");
    }

    return {
      timestamp: Date.now(),
      items,
    };
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    console.error("RSS feed fetch error:", {
      message: errorMsg,
      feedUrl: data.feedUrl,
      error,
    });
    return {
      timestamp: Date.now(),
      items: [],
      error: `Network error: ${errorMsg}`,
    };
  } finally {
    loader.pop();
  }
}
