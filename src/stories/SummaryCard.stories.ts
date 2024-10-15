import type { Meta, StoryObj } from '@storybook/react';
import { SummaryCard, SummaryCardProp } from '@/components/common/SummaryCard';

const image_url =
  'https://raw.githubusercontent.com/minagishl/tamariver/refs/heads/main/src/stories/assets/park.jpg';

const meta: Meta = {
  title: 'Common/SummaryCard',
  component: SummaryCard,
  tags: ['components', 'autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    loading: {
      control: 'boolean',
    },
    desktop: {
      control: 'boolean',
    },
    prop: {
      title: { control: 'text' },
      sport: { control: 'array' },
      date: { control: 'date' },
      url: { control: 'text' },
      image_url: { control: 'text' },
      location: {
        name: { control: 'text' },
        address: { control: 'text' },
        capacity: { control: 'text' },
      },
    },
  },
} satisfies Meta<typeof SummaryCard>;

export default meta;

export const Mobile: StoryObj<typeof meta> = {
  args: {
    prop: {
      title: 'イベントの名前',
      sport: ['サッカー', '野球'],
      date: '2024-01-01T00:00:00Z',
      url: 'https://example.com',
      image_url: image_url,
      location: {
        name: '会場の名前',
        address: '住所',
        capacity: '100',
      },
    } as SummaryCardProp,
    loading: false,
    desktop: false,
  },
};

export const Desktop: StoryObj<typeof meta> = {
  args: {
    prop: {
      title: 'イベントの名前',
      sport: ['サッカー', '野球'],
      date: '2024-01-01T00:00:00Z',
      url: 'https://example.com',
      image_url: image_url,
      location: {
        name: '会場の名前',
        address: '住所',
        capacity: '100',
      },
    } as SummaryCardProp,
    loading: false,
    desktop: true,
  },
};

export const LoadingMobile: StoryObj<typeof meta> = {
  args: {
    prop: {
      title: 'イベントの名前',
      sport: ['サッカー', '野球'],
      date: '2024-01-01T00:00:00Z',
      url: 'https://example.com',
      image_url: image_url,
      location: {
        name: '会場の名前',
        address: '住所',
        capacity: '100',
      },
    } as SummaryCardProp,
    loading: true,
    desktop: false,
  },
};

export const LoadingDesktop: StoryObj<typeof meta> = {
  args: {
    prop: {
      title: 'イベントの名前',
      sport: ['サッカー', '野球'],
      date: '2024-01-01T00:00:00Z',
      url: 'https://example.com',
      image_url: image_url,
      location: {
        name: '会場の名前',
        address: '住所',
        capacity: '100',
      },
    } as SummaryCardProp,
    loading: true,
    desktop: true,
  },
};

export const NoImageMobile: StoryObj<typeof meta> = {
  args: {
    prop: {
      title: 'イベントの名前',
      sport: ['サッカー', '野球'],
      date: '2024-01-01T00:00:00Z',
      url: 'https://example.com',
      image_url: '',
      location: {
        name: '会場の名前',
        address: '住所',
        capacity: '100',
      },
    } as SummaryCardProp,
    loading: false,
    desktop: false,
  },
};

export const NoImageDesktop: StoryObj<typeof meta> = {
  args: {
    prop: {
      title: 'イベントの名前',
      sport: ['サッカー', '野球'],
      date: '2024-01-01T00:00:00Z',
      url: 'https://example.com',
      image_url: '',
      location: {
        name: '会場の名前',
        address: '住所',
        capacity: '100',
      },
    } as SummaryCardProp,
    loading: false,
    desktop: true,
  },
};
