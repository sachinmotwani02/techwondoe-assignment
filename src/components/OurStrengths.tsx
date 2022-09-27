import React, { useEffect, useState } from 'react';
import candidates from '../assets/icons/candidates.png';
import employers from '../assets/icons/employers.png';
import vectorSVG from '../assets/vectorSVG/vector-svg-2.svg';
import { client } from '../client';
import { ICard, ICards, Card } from '../custom-hooks/Candidate';

const OurStrengths = () => {
  const [cards, setCards] = useState<ICard[]>([]);
  useEffect(() => {
    fetchData();
    // console.log(tdata);
  }, [cards]);

  const fetchData = async () => {
    try {
      const resp = await client.getEntries({
        content_type: 'candidateSection'
      });
      setCards(resp.items as any);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="text-gray-600 body-font bg-gray_bg relative overflow-hidden">
      <div className="container px-5 py-24 mx-auto ">
        <img src={vectorSVG} className="absolute right-0 z-0 hidden md:block" />
        <div className="flex relative z-10 flex-wrap -m-4 items-center justify-center">
          {cards
            .slice(0)
            .reverse()
            .map((cards: any, index: number) => (
              <Card card={cards} key={index} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default OurStrengths;
