import { Box, Pagination, Typography } from "@mui/material";
import { MetaData } from "../models/pagination";
import { useState } from "react";

interface Props {
  metaData: MetaData;
  onPageChange: (page: number) => void;
}

export default function AppPagination({ metaData, onPageChange }: Props) {
  const { pageSize, currentPage, totalCount, totalPages } = metaData;
  const [pageNumber, setPageNumber] = useState(currentPage);

  function handlePageChange(page: number) {
    setPageNumber(page);
    onPageChange(page);
  }

  return (
    <Box
      display="flex"
      justifyContent={"space-between"}
      alignContent={"center"}
    >
      <Typography variant="body1">
        Displaying {(currentPage - 1) * pageSize + 1}-
        {currentPage * pageSize > totalCount!
          ? totalCount
          : currentPage * pageSize}{" "}
        of {totalCount} results
      </Typography>
      <Pagination
        color="secondary"
        size="large"
        count={totalPages}
        page={pageNumber}
        onChange={(e, page) => handlePageChange(page)}
      />
    </Box>
  );
}
