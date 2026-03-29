/**
 * Returns the top items from a data object based on its topItems count.
 * @param {{ topItems: number, items: any[] }} data
 */
export const getTopItems = (data) => data.items.slice(0, data.topItems);

/**
 * Returns items beyond the top count (the "show more" items).
 * @param {{ topItems: number, items: any[] }} data
 */
export const getMoreItems = (data) => data.items.slice(data.topItems);
