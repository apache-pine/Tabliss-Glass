import Link from "@docusaurus/Link";
import React from "react";

interface DownloadButtonsProps {
  height?: number | string;
}

export default function DownloadButtons({ height = 60 }: DownloadButtonsProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        marginBottom: "20px",
        justifyContent: "center",
      }}
    >
      <Link
        className="button button--primary button--lg"
        style={{
          minHeight: height,
          display: "inline-flex",
          alignItems: "center",
        }}
        to="/getting-started/installation/edge"
      >
        Manual Edge install
      </Link>
    </div>
  );
}
