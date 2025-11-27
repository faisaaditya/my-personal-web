const Stats = () => {
  const statsData = [
    {
      label: "Projects Completed",
      value: "12+",
    },
    {
      label: "Happy Clients",
      value: "8+",
    },
    {
      label: "Years of Experience",
      value: "2+",
    },
  ];

  return (
    <div className="mt-6">
      <div className="bg-primary-bg rounded-lg shadow-lg p-6">
        <dl className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {statsData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col p-4 border border-accent rounded-lg hover:scale-105 transition-transform"
            >
              <dd className="text-4xl font-extrabold text-text-primary">
                {item.value}
              </dd>
              <dt className="mt-2 text-lg text-text-secondary">{item.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Stats;
