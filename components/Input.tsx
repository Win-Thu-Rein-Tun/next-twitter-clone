interface InputProps {
  placeholder?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  type,
  onChange,
  disabled,
  label,
  className,
}) => {
  return (
    <div className="w-full">
      {label && (
        <p className="text-xl text-white font-semibold mb-2">{label}</p>
      )}
      <input
        disabled={disabled}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        type={type}
        className={`
            w-full
            p-4 
            text-lg 
            bg-black 
            border-2
            border-neutral-800 
            rounded-md
            outline-none
            text-white
            focus:border-sky-500
            focus:border-2
            transition
            disabled:bg-neutral-900
            disabled:opacity-70
            disabled:cursor-not-allowed
            invalid:text-pink-600
            focus:invalid:border-pink-600
            ${className}
          `}
      />
      <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
        Please provide a valid email address.
      </p>
    </div>
  );
};

export default Input;
