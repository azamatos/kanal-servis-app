import { useField, ErrorMessage } from 'formik';
import * as React from 'react';

interface Props {
  name: string;
  label: string;
  type: string;
}

const Input = ({ name, label, ...props }: Props) => {
  const [field, meta] = useField(name);

  return (
    <div className="flex flex-col">
      <div className="flex ">
        <label className="w-[140px] text-2xl font-bold" htmlFor={field.name}>
          {label}
        </label>
        <input
          className={`${meta.error && meta.touched ? "border-red-500" : ""
            } w-[300px] border-4 rounded-md h-10 border-[#27569C] text-2xl`}
          {...field}
          {...props}
        />
      </div>
      <div className="flex w-full justify-center ">
        <ErrorMessage
          name={field.name}
          component="div"
          className="text-red-500 text-xs"
        />
      </div>
    </div>
  );
};

export default Input