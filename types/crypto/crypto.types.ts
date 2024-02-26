export type CoinSimplePriceType = {
  [key: string]: {
    inr: number;
    inr_24h_change: number;
    usd: number;
    usd_24h_change: number;
  };
};

export type GetCoinByIdDataType = {
  id: string;
  symbol: string;
  name: string;
  web_slug: string;
  asset_platform_id: any | null;
  platforms: any;
  detail_platforms: any;
  block_time_in_minutes: number;
  hashing_algorithm: string;
  categories: string[];
  preview_listing: boolean;
  public_notice: any | null;
  additional_notices: any;
  description: any;
  links: Links;
  image: Image;
  country_origin: string;
  genesis_date: Date;
  sentiment_votes_up_percentage: number;
  sentiment_votes_down_percentage: number;
  watchlist_portfolio_users: number;
  market_cap_rank: number;
  status_updates: any[];
  last_updated: Date;
};

export type Image = {
  thumb: string;
  small: string;
  large: string;
};

export type Links = {
  homepage: string[];
  whitepaper: string;
  blockchain_site: string[];
  official_forum_url: string[];
  chat_url: string[];
  announcement_url: string[];
  twitter_screen_name: string;
  facebook_username: string;
  bitcointalk_thread_identifier: null;
  telegram_channel_identifier: string;
  subreddit_url: string;
  repos_url: any;
};
