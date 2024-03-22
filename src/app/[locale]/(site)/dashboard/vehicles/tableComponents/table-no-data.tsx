import Box from '@mui/material/Box';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import { Text } from '@nextui-org/react';

// ----------------------------------------------------------------------
interface TableNoDataProps {
  query: string;
}

export default function TableNoData({ query }: TableNoDataProps) {
  return (
    <TableRow>
      <TableCell align="center" colSpan={100} sx={{ py: 5, border: 'none' }}>
        <Box
        >
          <Text h3 css={{ mb: '$10' }}>
            Not found
          </Text>

          <Text>
            No results found for &nbsp;
            <strong>&quot;{query}&quot;</strong>.
            <br /> Try checking for typos or using complete words.
          </Text>
        </Box>
      </TableCell>
    </TableRow>
  );
}