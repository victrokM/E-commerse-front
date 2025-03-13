import React, { ChangeEvent, FormEvent, JSX, useState } from 'react';
import InputField from './InputField';
import { User } from '@/models/User.interface';
import clsx from 'clsx';

interface Errors {
  firstname?: string;
  lastname?: string;
  phoneNumber?: string;
  email?: string;
  password?: string;
}

export default function Register(): JSX.Element {
  const [formData, setFormData] = useState<User>({});
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    const newErrors: Errors = {};
    if (!formData.firstname) newErrors.firstname = 'Debe ingresar el País';
    if (!formData.lastname)
      newErrors.lastname = 'Debe ingresar el departamento';
    if (!formData.phoneNumber)
      newErrors.phoneNumber = 'Debe ingresar el departamento';
    if (!formData.email) newErrors.email = 'Debe ingresar el departamento';
    if (!formData.password)
      newErrors.password = 'Debe ingresar el departamento';
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }
    setErrors({});
  };

  return (
    <div className="w-full">
      <div className=" text-2xl font-semibold text-gray-400 whitespace-nowrap mt-5">
        Sign in
      </div>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="w-full rounded-b-lg px-7 py-7 flex flex-col items-center justify-center gap-3"
      >
        <InputField
          label="Firstname*"
          name="firstname"
          value={formData.firstname ?? ''}
          onChange={handleChange}
          error={errors.firstname}
        />
        <InputField
          label="Lastname*"
          name="lastname"
          value={formData.lastname ?? ''}
          onChange={handleChange}
          error={errors.lastname}
        />
        <InputField
          label="Phone*"
          name="phoneNumber"
          value={formData.phoneNumber ?? ''}
          onChange={handleChange}
          error={errors.phoneNumber}
        />
        <InputField
          label="Email*"
          name="email"
          value={formData.email ?? ''}
          onChange={handleChange}
          error={errors.email}
        />
        <InputField
          label="Password*"
          name="password"
          value={formData.password ?? ''}
          onChange={handleChange}
          error={errors.password}
        />
        <button
          className={clsx(
            ' rounded-lg p-2 text-sm w-[40%] hover:scale-110 transition-all duration-100 text-center h-fit mt-3 shadow-xl ',
            loading ? 'bg-zinc-300 text-[#F5F5F5]' : ''
          )}
        >
          {loading ? (
            <div className="flex items-center justify-center">
              {/* <Oval height={24} width={24} color="#fff" /> */}
              <span className="ml-2"> Continue</span>
            </div>
          ) : (
            <>Continue</>
          )}
        </button>
      </form>
    </div>
  );
}
