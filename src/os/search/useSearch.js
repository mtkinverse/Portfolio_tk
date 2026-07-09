import { useMemo } from 'react';
import buildIndex from './buildIndex';
import match from './match';

export default function useSearch(query) {
  const index = useMemo(buildIndex, []);
  return useMemo(() => match(index, query), [index, query]);
}
