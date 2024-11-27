import React, { useEffect } from "react";

const CalendlyBadgeWidget: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      (window as any).Calendly.initBadgeWidget({
        url: "https://calendly.com/casi-carino-business/30min",
        text: "Schedule A Quick Chat",
        color: "#0B032D",
        textColor: "#ffffff",
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
    </>
  );
};

export default CalendlyBadgeWidget;