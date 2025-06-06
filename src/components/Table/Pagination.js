import React from "react";
import { Box, Button, Flex } from "../styled";

/**
 * Component use for pagination
 * @param {Object} param0
 * @param {Function} param0.onPrevPage function to call when previous page is clicked
 * @param {Function} param0.onNextPage function to call when next page is clicked
 * @param {Boolean} param0.isDisabledPrev disable previous button
 * @param {Boolean} param0.isDisabledNext disable next button
 * @returns
 */
const Pagination = ({
  onPrevPage,
  onNextPage,
  isDisabledPrev,
  isDisabledNext,
}) => {
  return (
    <Flex justifyContent="flex-end">
      <Box>
        <Button type="button" onClick={onPrevPage} disabled={isDisabledPrev}>
          &lt;&lt;
        </Button>
      </Box>
      <Box marginLeft="1rem">
        <Button type="button" onClick={onNextPage} disabled={isDisabledNext}>
          &gt;&gt;
        </Button>
      </Box>
    </Flex>
  );
};

export default Pagination;
