import React, { useCallback } from "react";

//  LOCAL COMPONENTS
import { Section, Heading, ScrollInTo } from "@/Components";
import {
  CardBrowser,
  PaginationSection,
  useLoadMoreOnIntersect,
  usePropertiesQuery,
  LoadingSection,
  ErrorSection,
  useProductsFilters,
} from "@/features/browser";

// EXTERNAL COMPONENTS
import { CircularProgress } from "@mui/material";
import { flushSync } from "react-dom";
import useIsSmallScreen from "@/hooks/useIsSmallScreen ";

const ResultsBrowser = React.memo(({ view, modeNavigate }) => {
    const isSmallScreen = useIsSmallScreen("(max-width:768px)");

  const { status, page, sort, search, filters, limit } = useProductsFilters();
  const setPage = useProductsFilters((s) => s.setPage);

  const {
    isLoading,
    isFetching,
    isError,
    error,
    isSuccess,
    refetch,
    data,
    hasMore,
    loadMore,
    isLoadingMore,
    items,
  } = usePropertiesQuery({status, page, sort, search, filters, limit});

  const sentinelRef = useLoadMoreOnIntersect(() => {
    if (hasMore&&!isLoadingMore ) {
      loadMore?.();
    }
  });
  const saleOrRent = modeNavigate === "FOR_SALE" ? "sale" : "rent";

  const handleChange = useCallback(
    (nextPage) => {
      if (nextPage === page) return;
      flushSync(() => {
        setPage(nextPage);
      });
      ScrollInTo("result-section");
    },
    [page, setPage]
  );

  if (isLoading || (isFetching && !isSuccess)) {
    return <LoadingSection saleOrRent={saleOrRent} />;
  }
  if (isError) {
    return <ErrorSection error={error} onClick={refetch} />;
  }

  return (
    <Section
      id="result-section"
      variant="border-b-0 scroll-mt-5 sm:scroll-mt-0 "
    >
      {/* HEADING */}
      <Heading
        label={`Properties for ${saleOrRent}`}
        text={`showing ${data?.totalCount ?? 0} results`}
        variant="!font-semibold !text-xl !leading-7 "
      />
      {/* REAL STATE RESULTS */}
      <div
        className={`mt-6 transition grid overflow-x-hidden   ![overflow-y:hidden] grid-cols-1 ${
          view
            ? " sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]"
            : " place-items-center"
        } gap-6`}
      >
        {isSuccess &&
          items.map((item, ind) => (
            <CardBrowser key={item.id} view={view} data={item} i={ind} />
          ))}
        {isSmallScreen && hasMore && !isLoadingMore&&(
          <div
            className="w-full max-w-2xl h-64 flex items-center justify-center "
            style={{ overflowAnchor: "none" }}
          >
            <div ref={sentinelRef} />
            {isLoadingMore && <CircularProgress />}
          </div>
        )}
      </div>

      {/* PAGINATION */}
      {!isSmallScreen && data?.totalCount > 0 && (
        <PaginationSection
          count={data?.totalPages ?? 1}
          onChange={(nextPage) => {
            handleChange(nextPage);
          }}
          page={page}
        />
      )}
    </Section>
  );
});

export default ResultsBrowser;
