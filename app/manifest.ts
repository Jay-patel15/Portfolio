import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jay Patel — Data Analyst & Software Developer",
    short_name: "Jay Patel",
    description:
      "Portfolio of Jay Patel, Data Analyst & Software Developer specializing in Python, SQL, Data Analytics, ETL Pipelines, Machine Learning, and Web Development.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0c",
    theme_color: "#0a0a0c",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
