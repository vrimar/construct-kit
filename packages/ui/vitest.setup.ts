class ResizeObserver {
  observe() {}

  unobserve() {}

  disconnect() {}
}

class IntersectionObserver {
  root = null;
  rootMargin = "0px";
  thresholds = [];

  disconnect() {}

  observe() {}

  takeRecords() {
    return [];
  }

  unobserve() {}
}

globalThis.ResizeObserver = ResizeObserver;
globalThis.IntersectionObserver = IntersectionObserver;
