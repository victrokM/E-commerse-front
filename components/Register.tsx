import React, { ChangeEvent, JSX, useState } from 'react';
import InputField from './InputField';
import { User } from '@/models/User.interface';

export default function Register(): JSX.Element {
  const [formData, setFormData] = useState<User>({});
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  return (
    <div>
      Sign up
      <div>
        <InputField
          label="Firstname*"
          name="firstName"
          value={formData.firstName ?? ''}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
