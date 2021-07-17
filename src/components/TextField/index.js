const TextField = ({ name, placeholder, ...props }) => {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      aria-label={placeholder}
      {...props}
    />
  );
};

export default TextField;
