const InputSubjects = ({
  id,
  placeholder,
  handleChange,
  value,
  onClick,
  disabled,
  color,
}) => {
  return (
    <div className="flex flex-row">
      <input
        className=" text-text h-12 w-full rounded-lg border-[1px] bg-transparent p-2 hover:translate-y-[-2px] hover:border-[2px]"
        id={id}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      <button className={`btn ${color}`} onClick={onClick} disabled={disabled}>
        +
      </button>
    </div>
  );
};

export default InputSubjects;
