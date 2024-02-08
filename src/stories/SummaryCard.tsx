import React from 'react';
import SummaryCardType from '@/types/SummaryCardType';
import Link from 'next/link';
import { SummaryCardImage } from './SummaryCardImage';
/* interface SummaryCardProps {
  data: SummaryCardType;
  className?: string;
  onClick?: () => void;
} */

export const SummaryCardComp = ({ prop }: { prop: SummaryCardType }) => {
  return (
    <Link href={typeof prop !== undefined ? prop.url : 'http://localhost:3000'} legacyBehavior>
      <div className="rounded-lg border border-b-0 border-l-2 border-r-0	border-t-2 border-inherit bg-white p-3 shadow-lg hover:bg-slate-100 dark:bg-slate-400">
        {prop.image !== undefined && (
          <SummaryCardImage
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 56 56">
                <path
                  fill="currentColor"
                  d="M28 51.906c13.055 0 23.906-10.828 23.906-23.906c0-13.055-10.875-23.906-23.93-23.906C14.899 4.094 4.095 14.945 4.095 28c0 13.078 10.828 23.906 23.906 23.906m0-3.984C16.937 47.922 8.1 39.062 8.1 28c0-11.04 8.813-19.922 19.876-19.922c11.039 0 19.921 8.883 19.945 19.922c.023 11.063-8.883 19.922-19.922 19.922m-.211-28.266c1.71 0 3.047-1.36 3.047-3.047c0-1.71-1.336-3.07-3.047-3.07s-3.047 1.36-3.047 3.07a3.026 3.026 0 0 0 3.047 3.047m-3.914 21.235h9.562c.961 0 1.711-.68 1.711-1.641c0-.914-.75-1.64-1.71-1.64H30.53V25.68c0-1.266-.656-2.11-1.828-2.11h-4.43c-.937 0-1.687.727-1.687 1.64c0 .962.75 1.642 1.687 1.642h2.532v10.757h-2.93c-.938 0-1.688.727-1.688 1.641c0 .96.75 1.64 1.688 1.64"
                />
              </svg>
            }
            img={prop.image}
            view={prop.location.name}
          />
        )}
        <h3 className="mt-5 text-2xl">{prop.name}</h3>
        <div className="flex justify-between">
          <div className="flex items-center justify-center rounded-full border border-black px-2">
            {new Date(prop.date).toLocaleString()}
          </div>
          <div className="flex items-center justify-center">
            {prop.sport?.map((sport, index) => {
              return (
                <div key={index} className="m-1 rounded-full border p-1 text-xl">
                  {sport}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Link>
  );
};
