import { HOURS } from "../../../utils";
import { API } from "../../types";

export type RSSItem = {
  title: string;
  link: string;
  pubDate?: string;
};

export type RSSCache = {
  timestamp: number;
  items: RSSItem[];
  error?: string;
};

export type RSSData = {
  feedUrl: string;
  refreshInterval: number;
  maxItems: number;
};

export type Props = API<RSSData, RSSCache>;

export const defaultData: RSSData = {
  feedUrl: "https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en",
  refreshInterval: 15 * 60 * 1000, // 15 minutes
  maxItems: 12,
};
