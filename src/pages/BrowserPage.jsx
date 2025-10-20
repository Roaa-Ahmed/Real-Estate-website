import React, { useEffect, useState } from "react";

// LOCAL COMPONENTS
import { Section } from "@/Components";
import {
  ResultsBrowser,
  SearchBrowser,
  FilterBrowser,
  useProductsFilters,
} from "@/features/browser";
import SignUpForm from "./SignupPage";

const BrowserPage = React.memo(({ mode }) => {
  const [view, setView] = useState(true);
  const setStatus = useProductsFilters((s) => s.setStatus);
  const setPage = useProductsFilters((s) => s.setPage);

  useEffect(() => {
    setStatus(mode);
    setPage(1);
  }, [mode,setPage,setStatus]);

  return (
    <>
      <Section variant="border-b-0 !p-0">
        <SearchBrowser modeNavigate={mode} />
        <FilterBrowser view={view} setView={setView} />
        <ResultsBrowser view={view} setView={setView} modeNavigate={mode} />
        <SignUpForm/>
      </Section>
    </>
  );
});

export default BrowserPage;
