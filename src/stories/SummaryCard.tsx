'use client';

import React, { useState } from 'react';
import SummaryCardType from '@/types/SummaryCardType';
import Link from 'next/link';
import { Label } from './Label';
import Favorite from '@/components/icons/Favorite';
import FavoriteActive from '@/components/icons/FavoriteActive';
import favoriteStorage, { getFavoriteStorage, removeFavoriteStorage } from '@/utils/favoriteStorage';

interface SummaryCardProps {
  prop: SummaryCardType;
  pulse?: boolean;
  desktop?: boolean; // is Desktop
}

export const SummaryCard = ({ prop, pulse = false, desktop = false }: SummaryCardProps) => {
  const [favorite, setFavorite] = useState(getFavoriteStorage().includes(prop.url));
  const formattedDate = new Date(prop.date).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  if (desktop) {
    return DesktopSummaryCard(prop, formattedDate, pulse);
  }

  const handleFavoriteClick = (id: string) => {
    console.log(id);
    if (favorite) {
      removeFavoriteStorage(id);
      setFavorite(false);
    } else {
      favoriteStorage(id);
      setFavorite(true);
    }
  };

  return (
    <div className="relative h-fit w-full">
      <Link href={typeof prop !== undefined ? String(prop.url) : 'http://localhost:3000'} legacyBehavior>
        <div
          className={`my-4 flex w-full cursor-pointer flex-col justify-center space-x-3 bg-white px-5 pt-4 ${pulse && 'animate-pulse'}`}
        >
          <div className="flex w-full max-w-md flex-row">
            <div className="m-1 h-20 w-28 rounded bg-zinc-200"></div>
            <div className="m-1 flex w-full flex-1 flex-col space-y-1.5 truncate">
              {pulse ? (
                <div className="h-6 w-full animate-pulse rounded bg-zinc-200"></div>
              ) : (
                <Label
                  innerText={prop.title}
                  size="primary"
                  weight="semibold"
                  className="w-full overflow-hidden truncate text-left text-zinc-900"
                />
              )}

              {pulse ? (
                <div className="h-6 w-9/12 animate-pulse rounded bg-zinc-200"></div>
              ) : (
                <Label
                  innerText={formattedDate}
                  size="tertiary"
                  weight="normal"
                  className="w-full text-left text-zinc-500"
                />
              )}
            </div>
          </div>
        </div>
      </Link>
      <div className="absolute bottom-1 right-0 flex flex-row px-5">
        {favorite ? (
          <button onClick={() => handleFavoriteClick(prop.url)}>
            <FavoriteActive />
          </button>
        ) : (
          <button onClick={() => handleFavoriteClick(prop.url)}>
            <Favorite />
          </button>
        )}
      </div>
    </div>
  );
};

const DesktopSummaryCard = (prop: SummaryCardType, formattedDate: string, pulse: boolean) => {
  const [favorite, setFavorite] = useState(getFavoriteStorage().includes(prop.url));

  const handleFavoriteClick = (id: string) => {
    console.log(id);
    if (favorite) {
      removeFavoriteStorage(id);
      setFavorite(false);
    } else {
      favoriteStorage(id);
      setFavorite(true);
    }
  };

  return (
    <div className="relative w-full p-5">
      <div className="aspect-video w-full rounded bg-zinc-200"></div>
      {pulse ? (
        <div className="h-6 w-full animate-pulse rounded bg-zinc-200"></div>
      ) : (
        <Label
          innerText={prop.title}
          size="primary"
          weight="semibold"
          className="w-full overflow-hidden truncate text-left text-zinc-900"
        />
      )}

      {pulse ? (
        <div className="h-6 w-9/12 animate-pulse rounded bg-zinc-200"></div>
      ) : (
        <Label
          innerText={formattedDate}
          size="tertiary"
          weight="normal"
          className="w-full text-left text-zinc-500"
        />
      )}
      <div className="absolute bottom-5 right-5 flex flex-row">
        {favorite ? (
          <button onClick={() => handleFavoriteClick(prop.url)}>
            <FavoriteActive />
          </button>
        ) : (
          <button onClick={() => handleFavoriteClick(prop.url)}>
            <Favorite />
          </button>
        )}
      </div>
    </div>
  );
};
