import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { expenses } from '../../common/components/navbar/mocks/ExpensesMock';

const columns: GridColDef[] = [
  { field: 'nazwa', headerName: 'Nazwa', width: 250 },
  { field: 'cena', headerName: 'Cena', width: 250 },
  { field: 'data', headerName: 'Data Zakupu', width: 250 },
  { field: 'kategoria', headerName: 'Kategoria', type: 'number', width: 250 },
];

export default function ExpensesTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={expenses} columns={columns} pageSize={5} rowsPerPageOptions={[5]} />
    </div>
  );
}
