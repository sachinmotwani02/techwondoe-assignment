import React, { useEffect, useState } from 'react';
import { client } from '../client';
import { ICareer, Career } from '../custom-hooks/Career';

const CareerSection = () => {
  const [data, setData] = useState<ICareer[]>([]);

  useEffect(() => {
    fetchData();
  }, [data]);

  const fetchData = async () => {
    try {
      const resp = await client.getEntries({
        content_type: 'careerSection'
      });
      setData(resp.items as any);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="body-font bg-primary">
      {data
        .slice(0)
        .reverse()
        .map((data: any, index: number) => (
          <Career data={data} key={index} />
        ))}
    </section>
  );
};

export default CareerSection;
