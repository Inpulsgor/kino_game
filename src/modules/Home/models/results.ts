export interface ResultsResponse {
  current_winner_slot: number | null;
  current_winner_blockhash: string | null;
  current_winner_numbers: number[];
  slot_now: number | null;
  next_winner_slot: number | null;
  snooze: number | null;
}

export const FResultsData = (data?: ResultsResponse): ResultsResponse => ({
  current_winner_slot: data?.current_winner_slot ?? null,
  current_winner_blockhash: data?.current_winner_blockhash ?? null,
  current_winner_numbers: data?.current_winner_numbers ?? [],
  slot_now: data?.slot_now ?? null,
  next_winner_slot: data?.next_winner_slot ?? null,
  snooze: data?.snooze ?? null,
});
