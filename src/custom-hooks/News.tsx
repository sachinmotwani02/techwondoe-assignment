import React from 'react';

export interface ILatestNews {
  allNews: INews[];
}

export interface INews {
  news: {
    fields: {
      image: IImage;
      author: string;
      date: string;
      title: string;
    };
  };
}

interface IImage {
  fields: {
    file: {
      url: string;
    };
  };
}

export const News = ({ news }: INews) => {
  const { image, author, date, title } = news.fields;
  return (
    <div className="p-4 md:w-1/4">
      <div className="h-full overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={image.fields.file.url}
          alt="news image"
        />
        <div className="py-6">
          <h2 className="tracking-widest text-xs title-font font-semibold mb-1">
            by {author} | {date}
          </h2>
          <h1 className="title-font text-lg font-semibold text-gray-900 mb-3">
            {' '}
            {title}
          </h1>
          <div className="flex items-center flex-wrap ">
            <a className="text-primary hover:text-gray-500 hover:cursor-pointer inline-flex items-center md:mb-2 lg:mb-0 mt-7">
              <a>Read more ➜</a>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
