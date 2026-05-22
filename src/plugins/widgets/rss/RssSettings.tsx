import type { FC } from "react";
import { defineMessages, useIntl } from "react-intl";

import { defaultData, Props } from "./types";

const messages = defineMessages({
  feedUrl: {
    id: "plugins.rss.feedUrl",
    defaultMessage: "Feed URL",
    description: "Label for RSS feed URL input",
  },
  feedUrlPlaceholder: {
    id: "plugins.rss.feedUrlPlaceholder",
    defaultMessage: "Enter RSS feed URL",
    description: "Placeholder for RSS feed URL input",
  },
  refreshInterval: {
    id: "plugins.rss.refreshInterval",
    defaultMessage: "Refresh interval (minutes)",
    description: "Label for refresh interval setting",
  },
  maxItems: {
    id: "plugins.rss.maxItems",
    defaultMessage: "Maximum items to display",
    description: "Label for max items setting",
  },
});

const RssSettings: FC<Props> = ({ data = defaultData, setData }) => {
  const intl = useIntl();

  const handleFeedUrlChange = (url: string) => {
    setData({ ...data, feedUrl: url });
  };

  const handleRefreshIntervalChange = (minutes: number) => {
    setData({ ...data, refreshInterval: minutes * 60 * 1000 });
  };

  const handleMaxItemsChange = (max: number) => {
    setData({ ...data, maxItems: max });
  };

  return (
    <fieldset className="Widget">
      <label>
        {intl.formatMessage(messages.feedUrl)}
        <input
          type="text"
          value={data.feedUrl}
          onChange={(e) => handleFeedUrlChange(e.target.value)}
          placeholder={intl.formatMessage(messages.feedUrlPlaceholder)}
        />
      </label>

      <label>
        {intl.formatMessage(messages.refreshInterval)}
        <input
          type="number"
          min="1"
          max="1440"
          value={data.refreshInterval / (60 * 1000)}
          onChange={(e) =>
            handleRefreshIntervalChange(parseInt(e.target.value))
          }
        />
      </label>

      <label>
        {intl.formatMessage(messages.maxItems)}
        <input
          type="number"
          min="1"
          max="50"
          value={data.maxItems}
          onChange={(e) => handleMaxItemsChange(parseInt(e.target.value))}
        />
      </label>
    </fieldset>
  );
};

export default RssSettings;
