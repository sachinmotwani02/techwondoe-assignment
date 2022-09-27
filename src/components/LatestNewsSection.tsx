import React, { useEffect, useState } from 'react';
import cardImage from '../assets/images/newsimage.png';
import { client } from '../client';
import { ILatestNews, INews, News } from '../custom-hooks/News';
import Button from '../storybook-components/Button';

const LatestNewsSection = () => {
  const [news, setNews] = useState<INews[]>([]);
  useEffect(() => {
    fetchData();
    // console.log(tdata);
  }, [news]);

  const fetchData = async () => {
    try {
      const resp = await client.getEntries({ content_type: 'news' });
      setNews(resp.items as any);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="text-gray-600 overflow-hidden body-font">
      <div className="container overflow-hidden px-8 py-24 lg:px-36 ">
        <div className="flex justify-between py-8">
          <h4 className="font-bold md:text-3xl text-2xl text-gray-900">
            Latest news
          </h4>
          <Button variant="primary">Read more</Button>
        </div>
        <div className="flex justify-between flex-wrap -m-4">
          {news
            .slice(0)
            .reverse()
            .map((news: any, index: number) => (
              <News news={news} key={index} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNewsSection;
