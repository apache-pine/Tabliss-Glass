import { defineMessages } from "react-intl";

import { Config } from "../../types";
import Rss from "./Rss";
import RssSettings from "./RssSettings";
import { defaultData } from "./types";

const messages = defineMessages({
  name: {
    id: "plugins.rss.name",
    defaultMessage: "RSS Feed",
    description: "Name of the RSS widget",
  },
  description: {
    id: "plugins.rss.description",
    defaultMessage: "Display RSS feed items.",
    description: "Description of the RSS widget",
  },
});

const config: Config = {
  key: "widget/rss",
  name: messages.name,
  description: messages.description,
  dashboardComponent: Rss,
  settingsComponent: RssSettings,
  defaultData,
};

export default config;
