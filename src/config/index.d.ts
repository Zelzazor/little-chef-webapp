import { type FC, type PropsWithChildren } from 'react';

// Custom Type for a React functional component with props AND CHILDREN
export type FCC<P = Record<string, unknown>> = FC<PropsWithChildren<P>>;
