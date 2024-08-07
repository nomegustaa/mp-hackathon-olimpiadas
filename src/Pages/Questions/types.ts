export interface GetOlympicGamesCountriesProps {
  id: string;
  name: string;
  continent: string;
  flag_url: string;
  gold_medals: number;
  silver_medals: number;
  bronze_medals: number;
  total_medals: number;
  rank: number;
  rank_total_medals: number;
}

export interface TimeRemainingPropsCss {
  timeRemaining: number;
}

export type RequestProps = 'success' | 'error' | 'loading' | null;
