import React, { useState } from "react";
// LOCAL COMPONENTS
import { ScrollInTo } from "@/Components";
import {
  RangeOption,
  IconLabel,
  useResponsiveMenuProps,
} from "@/features/browser";

// EXTERNAL COMPONENTS
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";

const SelectFilters = React.memo(
  ({
    text,
    icon,
    variant = "",
    iconProps,
    from,
    to,
    isNumeric,
    filters,
    handleChange,
    valueRange,
    props,
  }) => {
    const [value, setValue] = useState("");

    const menuProps = useResponsiveMenuProps();

    return (
      <>
        <Select
          className="gray-interactive px-4 sm:px-6 py-2.25 !rounded-lg"
          displayEmpty
          variant="outlined"
          value={value}
          onChange={(e) => {
            isNumeric && setValue(e.target.value);
            filters(e.target.value);
          }}
          {...props}
          IconComponent={null}
          renderValue={(selected) => {
            const labelTextNum = selected ? `${selected} ${text}` : text;
            const labelTextSiz =
              valueRange[0] > 0 || valueRange[1] > 0
                ? `${valueRange[0]} - ${valueRange[1]} ${text}`
                : text;

            return (
              <IconLabel
                label={isNumeric ? labelTextNum : labelTextSiz}
                icon={icon}
                iconProps={iconProps}
                variantSpan="sm:text-base"
                variant={variant}
              />
            );
          }}
          sx={{
            "& .MuiSelect-select": {
              padding: 0,
              paddingRight: "0 !important",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "unset",
            },

            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
          MenuProps={menuProps}
        >
          {isNumeric == true ? (
            Array.from({ length: to - from + 1 }, (_, i) =>
              i == 0 ? (
                <MenuItem
                  key={i}
                  value=""
                  className="w-screen sm:!w-auto !justify-center sm:!justify-start"
                >
                  all
                </MenuItem>
              ) : (
                <MenuItem
                  key={i}
                  value={i + from - 1}
                  className=" w-screen sm:!w-auto !justify-center sm:!justify-start"
                >
                  {i + from - 1}
                </MenuItem>
              )
            )
          ) : (
            <MenuItem disableRipple>
              <RangeOption
                onChange={handleChange}
                handleCommit={(_, newValue) => filters(newValue)}
                valueSlider={valueRange}
              />
            </MenuItem>
          )}
        </Select>
      </>
    );
  }
);

export default SelectFilters;
