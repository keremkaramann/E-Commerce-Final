export const NOT_FETCHED = "NOT_FETCHED";
export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const FAILED = "FAILED";

export const notFetched = (id) => ({
  type: NOT_FETCHED,
  payload: id,
});
export const fetching = (id) => ({
  type: FETCHING,
  payload: id,
});
export const fetched = (id) => ({
  type: FETCHED,
  payload: id,
});
export const failed = (id) => ({
  type: FAILED,
  payload: id,
});