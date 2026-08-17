export {};

declare global {
  interface Window {
    gtag: (
      command: "event" | "config" | "js",
      targetIdOrEventName: string,
      params?: Record<string, unknown>
    ) => void;
  }
}