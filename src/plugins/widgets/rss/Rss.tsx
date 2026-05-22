import "./Rss.sass";

import type { FC } from "react";
import { useEffect, useState } from "react";
import { defineMessages, useIntl } from "react-intl";

import { useCachedEffect } from "../../../hooks";
import { fetchRSSFeed } from "./api";
import { defaultData, Props } from "./types";

const messages = defineMessages({
  title: {
    id: "plugins.rss.title",
    defaultMessage: "RSS Feed",
    description: "Title for RSS widget",
  },
  loading: {
    id: "plugins.rss.loading",
    defaultMessage: "Loading feed...",
    description: "Loading state for RSS widget",
  },
  error: {
    id: "plugins.rss.error",
    defaultMessage: "Failed to load feed",
    description: "Error state for RSS widget",
  },
  noItems: {
    id: "plugins.rss.noItems",
    defaultMessage: "No items found",
    description: "Empty state for RSS widget",
  },
  noSource: {
    id: "plugins.rss.noSource",
    defaultMessage: "No source",
    description: "Fallback text when RSS feed source is missing",
  },
});

const getFeedSourceLabel = (feedUrl: string) => {
  try {
    return new URL(feedUrl).hostname;
  } catch {
    return feedUrl;
  }
};

const Rss: FC<Props> = ({ cache, data = defaultData, setCache, loader }) => {
  const intl = useIntl();

  const [isFetching, setIsFetching] = useState(false);
  const feedSourceLabel = data.feedUrl ? getFeedSourceLabel(data.feedUrl) : "";

  // Debug: log data changes
  useEffect(() => {
    console.log("[RSS Widget] Data received:", {
      feedUrl: data.feedUrl,
      refreshInterval: data.refreshInterval,
      maxItems: data.maxItems,
    });
  }, [data]);

  useCachedEffect(
    () => {
      // Fetch RSS feed
      console.log("[RSS] Fetching from:", data.feedUrl);
      setIsFetching(true);
      fetchRSSFeed(data, loader)
        .then((res) => {
          console.log("[RSS] Fetch succeeded, items:", res.items?.length || 0);
          setCache(res);
        })
        .catch((err) => {
          console.error("[RSS] Fetch failed:", err);
        })
        .finally(() => setIsFetching(false));
    },
    cache ? cache.timestamp + data.refreshInterval : 0,
    [data.feedUrl, data.maxItems],
  );

  // If the feed URL changes externally, clear cache to show loading state
  useEffect(() => {
    console.log("[RSS] Feed URL changed to:", data.feedUrl);

    if (setCache) {
      setCache(undefined as Parameters<typeof setCache>[0]);
    }

    // fetch will be triggered by useCachedEffect dependency
  }, [data.feedUrl, setCache]);

  const isLoading = isFetching || !cache;
  const hasError = cache?.error;
  const items = cache?.items || [];

  return (
    <div className="Rss">
      <div className="RssHeader">
        <div className="RssAccent"></div>
        <h2 className="RssTitle">{intl.formatMessage(messages.title)}</h2>
        <div className="RssHeaderMeta">
          {isLoading ? (
            <div className="RssSpinner" aria-hidden="true"></div>
          ) : null}
          <div className="RssSource">
            {data.feedUrl ? (
              <a href={data.feedUrl} target="_blank" rel="noreferrer noopener">
                {feedSourceLabel}
              </a>
            ) : (
              <span>{intl.formatMessage(messages.noSource)}</span>
            )}
          </div>
        </div>
      </div>

      <div className="RssFeedContainer">
        {isLoading && (
          <div className="RssMessage">
            {intl.formatMessage(messages.loading)}
          </div>
        )}

        {hasError && (
          <div className="RssMessage RssError">
            {intl.formatMessage(messages.error)}: {cache.error}
          </div>
        )}

        {!isLoading && !hasError && items.length === 0 && (
          <div className="RssMessage">
            {intl.formatMessage(messages.noItems)}
          </div>
        )}

        {items.length > 0 && (
          <div className="RssItems">
            {items.map((item) => {
              const useAutoScroll = item.title.length > 72;

              return (
                <a
                  key={item.link || `${item.title}-${item.pubDate}`}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="RssItem"
                >
                  <div
                    className={`RssItemTitleScroller ${useAutoScroll ? "auto-scroll" : ""}`}
                  >
                    <div className="RssItemTitleTrack">
                      <div className="RssItemTitle">{item.title}</div>
                      {useAutoScroll && (
                        <div className="RssItemTitle" aria-hidden="true">
                          {item.title}
                        </div>
                      )}
                    </div>
                  </div>
                  {item.pubDate && (
                    <div className="RssItemDate">{item.pubDate}</div>
                  )}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Rss;
