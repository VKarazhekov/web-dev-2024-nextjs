'use client';

//codesandbox.io/p/devbox/morning-fire-ryx3t8

import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
        

export default function InputForm({ onSubmit }: any) {
  interface Uni {
    name: string, 
    code: string
  }

  const [user, setUser] = useState('');
  const [selectedUni, setSelectedUni] = useState<Uni | null>(null)

  const universities: Uni[] = [
    {name: 'Technical University', code: 'TU'},
    {name: 'Sofia University', code: 'SU'}
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(selectedUni)
    console.log(user)
    onSubmit({
      ...user,
      university: selectedUni!.code
    });
    setUser({ age: '', name: '', university: '' }); // reset form
    setSelectedUni(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div className="card flex flex-wrap flex-column align-items-center justify-content-center gap-3">
      <div className="p-inputgroup flex-1">
        <span className="p-inputgroup-addon">
          <i className="pi pi-user"></i>
        </span>
        <InputText
          placeholder="Name"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
      </div>
      <div className="p-inputgroup flex-1">
        <span className="p-inputgroup-addon">
          <i className="pi pi-user"></i>
        </span>
        <InputText
          placeholder="Age"
          name="age"
          type="number"
          value={user.age}
          onChange={handleChange}
        />
      </div>
      <div className="p-inputgroup flex-1">
            <Dropdown value={selectedUni} onChange={(e) => setSelectedUni(e.value)} options={universities} optionLabel="name" 
                placeholder="Select a University" className="w-full" />
        </div>
      {user && <div> Success!!! </div>}
      <div style={{ 'align-self': 'end' }}>
        <Button label="Submit" onClick={handleSubmit} />
      </div>
    </div>
  );
}