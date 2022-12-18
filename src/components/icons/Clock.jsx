const Clock = () => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="9" stroke="#33363F" stroke-width="2" />
        <path
          d="M16.5 12H12.25C12.1119 12 12 11.8881 12 11.75V8.5"
          stroke="orangered"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </>
  );
};

export default Clock;
