'use client';

import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { User } from './user';
import { Button } from 'primereact/button';


export default function UsersTable({ users, onDeleteUser }: { users: User[], onDeleteUser: (user: User) => void }) {
  return (
    <div className="card">
      <DataTable
        value={users}
        paginator
        rows={10}
        dataKey="name"
        filterDisplay="row"
        emptyMessage="No customers found."
      >
        <Column
          field="name"
          header="Name"
          filter
          filterPlaceholder="Search by users"
          style={{ minWidth: '12rem' }}
        />
        <Column
          field="age"
          header="Age"
          filter
          filterPlaceholder="Search by age"
          style={{ minWidth: '12rem' }}
        />
        <Column
          field="university"
          header="University"
          filter
          filterPlaceholder="Search by universities"
          style={{ minWidth: '12rem' }}
        />
        <Column
          header="Actions"
          body={(rowUser: User) => (
            <Button
              icon="pi pi-times"
              severity="danger"
              aria-label="Delete Row"
              onClick={() => onDeleteUser(rowUser)}
            />
          )}
          style={{ minWidth: '12rem' }}
        >
        </Column>
      </DataTable>
    </div>
  );
}