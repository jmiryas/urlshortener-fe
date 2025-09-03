import { useEffect } from "react";

export function useHeadResources() {
  useEffect(() => {
    const fontLink = document.createElement("link");
    fontLink.href =
      "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);

    const bootstrapIcons = document.createElement("link");
    bootstrapIcons.href = `${process.env.PUBLIC_URL}/css/bootstrap-icons.css`;
    bootstrapIcons.rel = "stylesheet";
    document.head.appendChild(bootstrapIcons);

    return () => {
      document.head.removeChild(fontLink);
      document.head.removeChild(bootstrapIcons);
    };
  }, []);
}
