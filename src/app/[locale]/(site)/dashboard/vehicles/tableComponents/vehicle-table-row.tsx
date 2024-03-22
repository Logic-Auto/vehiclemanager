import { useState } from 'react';

import Popover from '@mui/material/Popover';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { Collapse } from '@mui/material';
import { TableCell, TableRow } from '@mui/material';

import { Text } from '@nextui-org/react';
import { Flex } from '../../../styles/flex';
import { Table as NextTable } from "@nextui-org/react";

import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AlarmAddIcon from '@mui/icons-material/AlarmAdd';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { ServiceHistoryItem, Vehicle } from '../../../../CustomerData/vehicles/vehicles';

// ----------------------------------------------------------------------

interface VehicleTableRowProps extends Vehicle {
  selected: boolean;
  handleClick: (event: React.ChangeEvent<HTMLInputElement>, vin: string) => void;
}

export const VehicleTableRow: React.FC<VehicleTableRowProps> = ({
  selected,
  make,
  model,
  year,
  trim,
  color,
  licensePlate,
  vin,
  location,
  maintenanceReminder,
  handleClick,
  mileage,
  driveType,
  fuelType,
  transmissionStyle,
  bodyClass,
  insuranceCompany,
  insurancePolicyNumber,
  insuranceExpirationDate,
  serviceHistory,
  lastServiceDate
}) => {
  const [open, setOpen] = useState<HTMLButtonElement | null>(null);
  const [expand, setExpand] = useState<boolean>(false);

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  return (
    <>
      <TableRow hover tabIndex={-1} role="checkbox" selected={selected}
        sx={{
          '&:last-child td, &:last-child th': { border: 0 },
          '& td': { fontSize: '0.85rem', padding: '6px 12px' },
        }}
      >
        <TableCell padding="checkbox">
          <Checkbox disableRipple checked={selected} onChange={(event) => handleClick(event, vin)} />
        </TableCell>

        <TableCell sx={{ color: 'black' }}>{make}</TableCell>
        <TableCell sx={{ color: 'black' }}>{model}</TableCell>
        <TableCell sx={{ color: 'black' }}>{year}</TableCell>
        <TableCell sx={{ color: 'black' }}>{color}</TableCell>
        <TableCell sx={{ color: 'black' }}>{licensePlate}</TableCell>
        <TableCell sx={{ color: 'black' }}>{mileage.toLocaleString()} miles</TableCell>
        <TableCell sx={{ color: 'black' }}>{lastServiceDate.toLocaleDateString()}</TableCell>

        <TableCell align='center'>
          <Box
            bgcolor={maintenanceReminder === 'all good' ? 'lightgreen' : '#FAEDC8'}
            color={maintenanceReminder === 'all good' ? 'darkgreen' : '#FA6600'}
            px={1}
            py={0.6}
            borderRadius={2}
            display="inline-block"
            fontWeight="600"
            fontSize={12}
          >
            {maintenanceReminder}
          </Box>
        </TableCell>

        <TableCell align='right'>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setExpand(!expand)}
          >
            {expand ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell align="right">
          <IconButton onClick={handleOpenMenu}>
            <MoreVertIcon />
          </IconButton>
        </TableCell>
      </TableRow>


      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        sx={{
          '& .MuiPaper-root': { backgroundColor: 'white', borderRadius: '10px' },
          '& .MuiMenuItem-root': { fontSize: 'small' },
          '& .MuiSvgIcon-root': { fontSize: '1.2rem', mr: 1.5 }
        }}
      >
        <MenuItem onClick={handleCloseMenu} sx={{ color: 'rgba(0, 0, 0, 0.7)' }}>
          <FolderCopyIcon />
          Documents
        </MenuItem>

        <MenuItem onClick={handleCloseMenu} sx={{ color: 'rgba(0, 0, 0, 0.7)' }}>
          <AlarmAddIcon />
          Schedule service
        </MenuItem>

        <MenuItem onClick={handleCloseMenu} sx={{ color: 'rgba(0, 0, 0, 0.7)' }}>
          <EventAvailableIcon />
          Appointments
        </MenuItem>

        <MenuItem onClick={handleCloseMenu} sx={{ color: 'rgba(0, 0, 0, 0.7)' }}>
          <EditIcon />
          Edit
        </MenuItem>

        <MenuItem onClick={handleCloseMenu} sx={{ color: 'error.main' }}>
          <DeleteForeverIcon />
          Delete
        </MenuItem>
      </Popover>


      <TableRow >
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={expand} timeout="auto" unmountOnExit>

            <Flex
              direction={'row'}
              justify={'between'}
              css={{ margin: '$5', gap: '$5' }}
            >
              <div style={{ flex: '1' }}>
                <Text h3 css={{ mb: '$3' }}>Vehicle Details</Text>

                <Flex direction={'column'}>
                  <Text>VIN: {vin}</Text>
                  <Text>Trim: {trim}</Text>
                  <Text>Drive Type: {driveType}</Text>
                  <Text>Fuel Type: {fuelType}</Text>
                  <Text>Transmission Style: {transmissionStyle}</Text>
                  <Text>Body Class: {bodyClass}</Text>
                </Flex>
              </div>

              <div style={{ flex: '1' }}>
                <Text h3 css={{ mb: '$3' }}>Service History</Text>

                <NextTable
                  aria-label="service history"
                  css={{
                    height: "auto",
                    minWidth: "100%",
                  }}
                  // lined
                  headerLined
                  shadow={false}
                  sticked
                  compact
                >
                  <NextTable.Header>
                    <NextTable.Column css={{ fontSize: '$sm' }}>Date</NextTable.Column>
                    <NextTable.Column css={{ fontSize: '$sm' }}>Service</NextTable.Column>
                    <NextTable.Column css={{ fontSize: '$sm' }}>Auto Shop</NextTable.Column>
                  </NextTable.Header>

                  <NextTable.Body items={serviceHistory} css={{ fontSize: '$sm' }}>
                    {(record: ServiceHistoryItem) => (
                      <NextTable.Row key={record.date}>
                        <NextTable.Cell>{record.date.toLocaleDateString()}</NextTable.Cell>
                        <NextTable.Cell>{record.serviceType}</NextTable.Cell>
                        <NextTable.Cell>{record.repairShop}</NextTable.Cell>
                      </NextTable.Row>
                    )}
                  </NextTable.Body>
                </NextTable>
              </div>
            </Flex>
          </Collapse>
        </TableCell>
      </TableRow >
    </>
  );
}