import React, { useState, useRef, useEffect } from 'react';
import { Table, TableBody, TableContainer, TablePagination } from '@mui/material';
import { Card } from '@nextui-org/react';

import { vehicles, Vehicle } from '../../../CustomerData/vehicles/vehicles';
import TableNoData from './tableComponents/table-no-data';
import { VehicleTableRow } from './tableComponents/vehicle-table-row';
import VehicleTableHead from './tableComponents/vehicle-table-head';
import TableEmptyRows from './tableComponents/table-empty-rows';
import VehicleTableToolbar from './tableComponents/vehicle-table-toolbar';
import { emptyRows, applyFilter, getComparator } from './tableComponents/utils';

import { Flex } from '../../styles/flex';


export const TableView = () => {
    return (
        <Flex
            css={{ mt: '$10' }}
        >
            <MyVehiclesPage />
        </Flex>

    );
};

function MyVehiclesPage() {
    const [page, setPage] = useState(0);
    const [order, setOrder] = useState<'asc' | 'desc'>('asc');
    const [selected, setSelected] = useState<string[]>([]); // store the selected VIN (to be deleted)
    const [orderBy, setOrderBy] = useState<string>('model');
    const [filterModel, setFilterModel] = useState<string>('');
    const [rowsPerPage, setRowsPerPage] = useState<number>(5);
    const tableRef = useRef<HTMLDivElement>(null);

    const handleSort = (event: React.MouseEvent<HTMLButtonElement>, id: string) => {
        const isAsc = orderBy === id && order === 'asc';
        if (id !== '') {
            setOrder(isAsc ? 'desc' : 'asc');
            setOrderBy(id);
        }
    };

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelecteds = vehicles.map((n) => n.vin);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event: React.ChangeEvent<HTMLInputElement>, vin: string) => {
        const selectedIndex = selected.indexOf(vin);
        let newSelected: string[] = [];
        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, vin);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }
        setSelected(newSelected);
    };

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        if (event) {
            setPage(newPage);
        }
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPage(0);
        setRowsPerPage(parseInt(event.target.value, 10));
    };

    const handleFilterByModel = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPage(0);
        setFilterModel(event.target.value);
    };

    const dataFiltered = applyFilter({
        inputData: vehicles,
        comparator: getComparator(order, orderBy),
        filterModel,
    });

    const notFound = !dataFiltered.length && !!filterModel;

    useEffect(() => {
        if (tableRef.current) {
            tableRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [page, rowsPerPage]);


    return (
        <Card style={{ borderRadius: '20px' }} ref={tableRef}>
            <VehicleTableToolbar
                numSelected={selected.length}
                filterModel={filterModel}
                onFilterModel={handleFilterByModel}
            />

            <TableContainer>
                <Table sx={{ minWidth: 800 }}>
                    <VehicleTableHead
                        order={order}
                        orderBy={orderBy}
                        rowCount={vehicles.length}
                        numSelected={selected.length}
                        onRequestSort={handleSort}
                        onSelectAllClick={handleSelectAllClick}
                        headLabel={[
                            { id: 'make', label: 'Make' },
                            { id: 'model', label: 'Model' },
                            { id: 'year', label: 'Year' },
                            { id: 'color', label: 'Color' },
                            { id: 'licensePlate', label: 'Plate' },
                            { id: 'mileage', label: 'Mileage' },
                            { id: 'lastServiceDate', label: 'Last Service' },
                            { id: 'maintenanceReminder', label: 'Maintenance', align: 'center' },
                            { id: '' },
                        ]}
                    />
                    <TableBody>
                        {dataFiltered
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row: Vehicle) => (
                                <VehicleTableRow
                                    key={row.id}
                                    make={row.make}
                                    model={row.model}
                                    year={row.year}
                                    trim={row.trim}
                                    color={row.color}
                                    licensePlate={row.licensePlate}
                                    vin={row.vin}
                                    location={row.location}
                                    maintenanceReminder={row.maintenanceReminder}
                                    selected={selected.indexOf(row.vin) !== -1}
                                    handleClick={(event) => handleClick(event, row.vin)}
                                    mileage={row.mileage}
                                    driveType={row.driveType}
                                    fuelType={row.fuelType}
                                    transmissionStyle={row.transmissionStyle}
                                    bodyClass={row.bodyClass}
                                    insuranceCompany={row.insuranceCompany}
                                    insurancePolicyNumber={row.insurancePolicyNumber}
                                    insuranceExpirationDate={row.insuranceExpirationDate}
                                    serviceHistory={row.serviceHistory}
                                    lastServiceDate={row.lastServiceDate}
                                />
                            ))}

                        {/* <TableEmptyRows
                                height={50}
                                emptyRows={emptyRows(page, rowsPerPage, vehicles.length)}
                            /> */}

                        {notFound && <TableNoData query={filterModel} />}
                    </TableBody>
                </Table>
            </TableContainer>


            <TablePagination
                page={page}
                component="div"
                count={vehicles.length}
                rowsPerPage={rowsPerPage}
                onPageChange={handleChangePage}
                rowsPerPageOptions={[5, 10, 25]}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Card>

    );
}