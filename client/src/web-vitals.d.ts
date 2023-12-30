declare module 'web-vitals' {
    export function getCLS(onPerfEntry?: (metric: Metric) => void): void;
    export function getFID(onPerfEntry?: (metric: Metric) => void): void;
    export function getFCP(onPerfEntry?: (metric: Metric) => void): void;
    export function getLCP(onPerfEntry?: (metric: Metric) => void): void;
    export function getTTFB(onPerfEntry?: (metric: Metric) => void): void;
  
    // Add any additional types as needed
    interface Metric {
      name: string;
      value: number;
      entries: PerformanceEntry[];
      id?: string;
    }
  }
  