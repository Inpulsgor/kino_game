import { ResultsResponse } from 'modules/Kino/models/results';

export interface InfoPanelProps {
  isLoading?: boolean;
  gameResults: ResultsResponse;
  refetch: () => void;
}

export interface Renderer {
  total: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
  completed: boolean;
  api: Record<string, any>;
  props: Record<string, any>;
  formatted: Record<string, any>;
}
