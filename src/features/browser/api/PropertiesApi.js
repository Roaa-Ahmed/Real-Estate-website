import axios from "axios";
import { Search } from "lucide-react";
const isDev = process.env.NODE_ENV === "development";
export const API_URL = isDev
  ? "http://localhost:5174"
  : "https://real-estate-hub-data-api.onrender.com";

function buildPropertyParams(status, page, sort, search, filters, limit) {
  const p = new URLSearchParams();

  const setIf = (key, val) => {
    if (val !== "" && val !== null && val !== undefined)
      p.set(key, String(val));
  };
  // BUY & RENT
  setIf("status", status);

  // FILTERS

  setIf("bedrooms", filters.bedrooms);
  setIf("bathrooms", filters.bathrooms);
  setIf("area_sqm_gte", filters.area_sqm_gte);
  setIf("area_sqm_lte", filters.area_sqm_lte);

  // SORT
  setIf("_sort", sort.sort);
  setIf("_order", sort.order && String(sort.order).toLowerCase());

  //  SEARCH

  setIf("type", search.type && search.type.toUpperCase());
  setIf("price_gte", search.price_lte);
  setIf("price_lte", search.price_gte);
  setIf("city_like", search.city_like);

  // PAGINATION
  setIf("_limit", limit);
  setIf("_page", page);

  return p;
}

const fetchProperties = async ({
  signal,
  status,
  page,
  sort,
  search,
  filters,
  limit,
}) => {
  const params = buildPropertyParams(
    status,
    page,
    sort,
    search,
    filters,
    limit
  );
  const res = await axios.get(`${API_URL}/properties`, { signal, params });
  return res;
};
export default fetchProperties;
