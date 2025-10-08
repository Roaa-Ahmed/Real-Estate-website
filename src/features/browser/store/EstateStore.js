import { create } from "zustand";

const useProductsFilters = create((set) => ({
  status: '',
  page:1,
  sort:{sort:'price',order:'asc'},
  search:{},
  filters:{},
  limit:12,
  setStatus: (status) =>
    set({status}),
  setPage: (page) =>
    set({page}),
  setFilters: (filters) =>
    set({filters}),
  setSort: (sort) =>
    set({sort}),
  setSearch: (search) =>
    set({search}),
  setLimit: (limit) =>
    set({limit})
}));


export default useProductsFilters;
