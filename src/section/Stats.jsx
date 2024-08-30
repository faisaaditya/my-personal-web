const Stats = () => {
  return (
    <div className="mt-6 pb-1">
      <div className="relative">
        <div className="absolute "></div>
        <div className="relative ">
          <div className="max-w-4xl mx-auto">
            <dl className="rounded-lg bg-primary-bg shadow-lg sm:grid sm:grid-cols-3">
              <div className="flex flex-col border-b border-accent p-6 text-center sm:border-0 sm:border-r">
                <dd className="order-1 text-5xl font-extrabold text-text-primary">
                  500+
                </dd>
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-text-secondary">
                  Blockchain developers
                </dt>
              </div>
              <div className="flex flex-col border-t border-b border-accent p-6 text-center sm:border-0 sm:border-l sm:border-r">
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-text-secondary">
                  Response rate
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-text-primary">
                  58%
                </dd>
              </div>
              <div className="flex flex-col border-t border-accent p-6 text-center sm:border-0 sm:border-l">
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-text-secondary">
                  New devs a month
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-text-primary">
                  30+
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
