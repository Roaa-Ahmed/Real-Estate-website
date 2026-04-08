import React, { useCallback, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// LOCAL COMPONENTS
import { Section, Heading, ButtonLocal, ScrollInTo } from "@/Components";
import { SelectSearch,useProductsFilters } from "@/features/browser";
import {
  PRICE_RANGE_OPTIONS,
  PROPERTY_TYPES,
} from "../../../constants/Options";

// EXTERNAL ICONS
import { Search } from "lucide-react";
// import ButtonLocal from './../../../Components/ui/ButtonLocal';

const SearchBrowser = React.memo(() => {
  // hooks
  const navigate = useNavigate();
  const location = useLocation();
  const [draft, setDraft] = useState({
    type: null,
    price_gte: null,
    price_lte: null,
    city_like: null,
  });
  const prevDraft = useRef(draft);
  const setStatus = useProductsFilters((s) => s.setStatus);
  const setSearch = useProductsFilters((s) => s.setSearch);
    const setPage = useProductsFilters((s) => s.setPage);


  const current = location.pathname.startsWith("/rent") ? "rent" : "buy";

  // Functions

  const handleClickButBuyRent = useCallback(
    (value, mode) => {
      setStatus(value);
      setPage(1)
      navigate(`/${mode}`);
      ScrollInTo("result-section");
    },
    [navigate, setStatus,setPage]

  );

  const handleSetDraft = useCallback((newDraft) => {
    setDraft((d) => ({ ...d, ...newDraft }));
  }, []);

  const onPriceChange = useCallback(
    (v) => {
      const { min, max } = v || {};
      if (String(max).trim() === "M10+") {
        handleSetDraft({ price_lte: min, price_gte: null });
      } else {
        handleSetDraft({ price_lte: min, price_gte: max });
      }
    },
    [handleSetDraft]
  );

  const checkDraftChange = () => {
    if (prevDraft?.current !== draft) {
      ScrollInTo("result-section");
    }
    prevDraft.current = draft;
  };

  const handleSearch = (e) => {
    e?.preventDefault?.();

    setSearch({
      type: draft.type,
      price_lte: draft.price_lte,
      price_gte: draft.price_gte,
      city_like: draft.city_like,
    });
          setPage(1)

    checkDraftChange();
  };

  

  return (
    <Section variant="!text-black">
      {/* CONTAINER HEADING & BUY & RENT BUTTONS */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <Heading
          label="Find Your Dream Property"
          text="Discover the perfect home from our extensive collection"
        />
        <div className="mx-auto sm:mx-0 sm:ms-auto">
          <ButtonLocal
            variant={`${
              current == "buy" ? "purple-interactive" : "gray-interactive"
            } me-3`}
            onClick={() => {
              handleClickButBuyRent("FOR_SALE", "buy");
            }}
          >
            buy
          </ButtonLocal>

          <ButtonLocal
            variant={
              current == "rent" ? "purple-interactive" : "gray-interactive"
            }
            onClick={() => {
              handleClickButBuyRent("FOR_RENT", "rent");
            }}
          >
            rent
          </ButtonLocal>
        </div>
      </div>
      {/* SEARCH FORM */}
      <form
        onSubmit={handleSearch}
        className="p-3 sm:p-6 rounded-xl bg-[#F9FAFB] mt-6 grid md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] sm:gap-2 gap-5  "
      >
        <SelectSearch
          isInput={true}
          placeholder="Enter location"
          label="location"
          updateParams={(e) => {
            handleSetDraft({ city_like: e.target.value });
          }}
        />
        <SelectSearch
          list={PROPERTY_TYPES}
          label="property type"
          defaultLabel="All Types"
          updateParams={(v) => {
            handleSetDraft({ type: v?.toUpperCase() || null });
          }}
        />

        <SelectSearch
          list={PRICE_RANGE_OPTIONS}
          label="price range"
          defaultLabel="Any Price"
          updateParams={(v) => {
            onPriceChange(v);
          }}
        />

        <ButtonLocal
          type="submit"
          variant="w-full h-12.5   purple-interactive  
          self-end  text-base flex justify-center items-center"
        >
          <Search className="h-5 w-5 me-1" />
          <span>search</span>
        </ButtonLocal>
      </form>
    </Section>
  );
});
export default SearchBrowser;
