import * as Sentry from "@sentry/react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./src/App";

Sentry.init({
  dsn: process.env.REACT_APP_VITE_DSN_KEY,
  release: "release version",
  integrations: [Sentry.browserTracingIntegration()],
  environment: "production",
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
  // Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", /^https:\/\/5173\.io\/api/],
});

ReactDOM.render(<App />, document.getElementById("root"));

// Can also use with React Concurrent Mode
// ReactDOM.createRoot(document.getElementById('root')).render(<App />);
