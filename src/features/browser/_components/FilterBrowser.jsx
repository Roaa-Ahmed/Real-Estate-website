import React, { useCallback, useState } from "react";

// LOCAL COMPONENTS
import { Section, ButtonLocal, ScrollInTo } from "@/Components";
import {
  SelectSearch,
  SelectFilters,
  useProductsFilters,
} from "@/features/browser";

// EXTERNAL COMPONENTS

// LOCAL ICONS
import Icon from "../../../assets/photos/Vector (1).svg?react";

// EXTERNAL ICONS
import { LayoutGrid, List } from "lucide-react";
import { FaExpandArrowsAlt } from "react-icons/fa";
import HotelIcon from "@mui/icons-material/Hotel";

//  CONSTANTS
import { SORT_OPTIONS } from "../../../constants/Options";
import useIsSmallScreen from "@/hooks/useIsSmallScreen ";

const FilterBrowser = React.memo(({ view, setView }) => {

    const isSmallScreen = useIsSmallScreen();

  const setSort = useProductsFilters((s) => s.setSort);
  const setPage = useProductsFilters((s) => s.setPage);
  const setFilters = useProductsFilters((s) => s.setFilters);
  const { filters } = useProductsFilters();
  const [valueRange, setValueRange] = useState([0, 0]);

  const hundelToggleButton = useCallback(
    (toggle) => {
      setView(toggle);
      ScrollInTo("result-section");
    },
    [setView]
  );

  const filterProducts = useCallback(
    (key, isRange, newValue) => {
      isRange && setValueRange(newValue);

      setFilters({ ...filters, ...key });
      setPage(1);
      ScrollInTo("result-section");
    },
    [setFilters, setPage, filters]
  );

  const handleChange = useCallback(
    (_, newValue) => {
      setValueRange(newValue);
    },
    [setValueRange]
  );

  const handleSort = useCallback(
    (e) => {
      const isE = e ? e : "price-asc";
      setSort({
        sort: isE.split("-")[0],
        order: isE.split("-")[1]?.trim().toLowerCase(),
      });
      setPage(1);
      ScrollInTo("result-section");
    },
    [setSort, setPage]
  );


  const viewBtns = [
    { val: true, Icon: LayoutGrid, label: "Grid view" },
    { val: false, Icon: List, label: "List view" },
  ];

  return (
    <Section variant="p-3 sm:!p-5">
      {/* Container Filters & Sort */}
      <div className={`text-black flexItemCenter justify-between gap-4`}>
        {/*  Container Filters*/}
        <div className={`capitalize flex  items-center gap-1.5 sm:gap-3 `}>
          <span className="textSort">filters:</span>

          <div className=" justify-start flexItemCenter gap-1.5 sm:gap-3">
            <SelectFilters
              text={isSmallScreen ? "bed" : "bedroom"}
              icon={HotelIcon}
              isNumeric={true}
              iconProps={{
                sx: {
                  fontSize: {
                    xs: 22,
                    "@media (max-width:600px)": { fontSize: 16 },
                  },
                },
              }}
              from={1}
              to={10}
              // keyParams="bedrooms"
              filters={(e) => filterProducts({ bedrooms: e })}
              valueRange={valueRange}
            />

            <SelectFilters
              text={isSmallScreen ? "bath" : "bathroom"}
              icon={Icon}
              isNumeric={true}
              variant="w-3.5 h-3.5 sm:w-4.5 h-4.5 mb-1"
              from={1}
              to={10}
              filters={(e) => filterProducts({ bathrooms: e })}
              valueRange={valueRange}
            />
            <SelectFilters
              text="size"
              icon={FaExpandArrowsAlt}
              variant="!text-xm sm:text-sm !font-extrabold "
              isNumeric={false}
              filters={(newValue) =>
                filterProducts({
                  area_sqm_gte: newValue[0],
                  area_sqm_lte: newValue[1],
                })
              }
              handleChange={handleChange}
              valueRange={valueRange}
            />
          </div>
        </div>

        {/* Container Sort & View */}
        <div
          className={` flexItemCenter justify-between capitalize gap-1.5 sm:gap-3 basis-full lg:basis-89`}
        >
          {/* Container Sort  */}
          <div className=" justify-between flexItemCenter gap-1.5 sm:gap-3 lg:flex-1">
            <span className="textSort">sort by:</span>
            <div className="mb-1.5 flex-1">
              <SelectSearch
                list={SORT_OPTIONS}
                variantGroup="!h-10.5"
                defaultLabel="Price: Low to High"
                updateParams={(e) => {
                  handleSort(e);
                }}
              />
            </div>
          </div>

          {/* CONTAINIER GRID & LIST BUTTONS  */}
          <div className={`flexItemCenter gap-2 !hidden sm:!flex justify-end`}>
            {viewBtns.map(({ val, Icon, label }) => {
              return (
                <ButtonLocal
                  key={label}
                  variant={`!p-1.5 ${
                    view == val ? "purple-interactive" : "gray-interactive"
                  }`}
                  onClick={() => {
                    hundelToggleButton(val);
                  }}
                  aria-pressed={val == view}
                  aria-label={label}
                >
                  <Icon className="w-6 h-5  !text-current" aria-hidden="true" />
                </ButtonLocal>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
});

export default FilterBrowser;
