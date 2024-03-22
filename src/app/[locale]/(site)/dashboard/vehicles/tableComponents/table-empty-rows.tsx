import PropTypes from 'prop-types';

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

// ----------------------------------------------------------------------

export default function TableEmptyRows({ emptyRows, height }) {
  if (!emptyRows) {
    return null;
  }

  return (
    <TableRow
      sx={{
        ...(height && {
          height: height * emptyRows,
        }),
        '&:last-child td, &:last-child th': { border: 0 },
      }}
    >
      <TableCell colSpan={9} />
    </TableRow>
  );
}

TableEmptyRows.propTypes = {
  emptyRows: PropTypes.number,
  height: PropTypes.number,
};
