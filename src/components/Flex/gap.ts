import type * as Stitches from '@stitches/react';
import {config} from '@stitches';

type TCSS = Stitches.CSS<typeof config>;

const {space} = config.theme;
type TSpaceKey = keyof typeof space;

export const gap = (Object.keys(space) as Array<TSpaceKey>).reduce<
  Record<TSpaceKey, TCSS>
>(
  (acc, cv) => ({
    ...acc,
    [cv]: {gap: `$space$${cv}`},
  }),
  {} as any
);
