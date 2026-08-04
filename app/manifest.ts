import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Seyed Keyvan Hosseini | Portfolio",
    short_name: "SKH Portfolio",
    description: "Personal portfolio and blog of Seyed Keyvan Hosseini.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/images/icons/192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/icons/512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/images/icons/512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
