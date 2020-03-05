import { normalize, NormalizedSchema, schema } from 'normalizr';

type entityKeys = 'items';

export const normalizeResponse = <T>(
  responseData: T[],
  schema: schema.Array
): NormalizedSchema<
  {
    [k in entityKeys]: {
      [key: string]: T;
    };
  },
  number[]
> => {
  return normalize(responseData, schema);
};
