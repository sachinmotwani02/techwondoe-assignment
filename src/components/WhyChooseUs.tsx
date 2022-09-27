import React, { useEffect, useState } from 'react';
import { client } from '../client';
import { ICheckpoint, CheckPoints } from '../custom-hooks/CheckPoints';

const WhyChooseUs = () => {
  const [data, setData] = useState<ICheckpoint[]>([]);

  useEffect(() => {
    fetchData();
  }, [data]);

  const fetchData = async () => {
    try {
      const resp = await client.getEntries({ content_type: 'checkPoints' });
      setData(resp.items as any);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col items-center justify-center">
        <h1 className="md:text-3xl text-2xl font-semibold title-font text-center mb-5">
          Why Choose us?
        </h1>
        <p className="font-regular md:w-2/5 w-full text-md md:text-md text-center">
          We have decades of experience, having successfully recruited across
          the globle for many years.
        </p>
        <div className="container md:px-36 py-20 mx-auto flex flex-row flex-wrap justify-around">
          {data
            .slice(0)
            .reverse()
            .map((data: any, index: number) => (
              <CheckPoints data={data} key={index} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
