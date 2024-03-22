import Tooltip from '@mui/material/Tooltip';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';

import { Text } from '@nextui-org/react';

import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';

// ----------------------------------------------------------------------

export default function VehicleTableToolbar({ numSelected, filterModel, onFilterModel }: {
  numSelected: number,
  filterModel: string,
  onFilterModel: (event: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <Toolbar
      sx={{
        height: 80,
        display: 'flex',
        justifyContent: 'space-between',
        p: (theme) => theme.spacing(0, 3, 0, 3),
        ...(numSelected > 0 && {
          color: 'primary.main',
        }),
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px',
      }}
    >
      {numSelected > 0 ? (
        <Text css={{ ml: '$10' }}>
          {numSelected} selected
        </Text>
      ) : (
        <OutlinedInput
          value={filterModel}
          onChange={onFilterModel}
          placeholder="Search model..."
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon sx={{ width: 20, height: 20 }} />
            </InputAdornment>
          }
          sx={{ width: '160px', height: '40px', borderRadius: '10px', marginLeft: '20px', fontSize: '14px' }}
        />
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}