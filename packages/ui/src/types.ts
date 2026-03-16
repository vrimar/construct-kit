import type { Ref } from "react";

/** Convenience type for components that accept a forwarded ref.
 *  Defaults to HTMLDivElement when no element type is specified.
 */
export type WithRef<T, E extends Element = HTMLDivElement> = T & { ref?: Ref<E> };
