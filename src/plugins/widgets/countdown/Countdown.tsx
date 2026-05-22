import { FC } from "react";
import { useIntl } from "react-intl";

import { useTime } from "../../../hooks";
import { selectUnit } from "../../../utils";
import { defaultData, Props } from "./types";

function formatRelativeTime(
  value: number,
  unit: Intl.RelativeTimeFormatUnit,
  locale: string,
  showPrefix: boolean,
) {
  const relativeTimeFormat = new Intl.RelativeTimeFormat(locale, {
    localeMatcher: "best fit",
    style: "long",
    numeric: "always",
  });

  if (showPrefix) {
    return relativeTimeFormat.format(value, unit);
  }

  const parts = relativeTimeFormat.formatToParts(value, unit);
  const firstContentIndex = parts.findIndex((part) => part.type !== "literal");

  return parts
    .slice(firstContentIndex > 0 ? firstContentIndex : 0)
    .map((part) => part.value)
    .join("");
}

const Countdown: FC<Props> = ({ data = defaultData }) => {
  const currentTime = useTime();
  const intl = useIntl();
  const { value, unit } = selectUnit(data.time, currentTime.getTime());

  return (
    <div className="Countdown">
      <h3>
        {currentTime.getTime() >= data.time
          ? "It is time"
          : formatRelativeTime(
              value,
              unit,
              intl.locale,
              data.showPrefix !== false,
            )}
      </h3>
      {data.title && <h4>{data.title}</h4>}
    </div>
  );
};

export default Countdown;
