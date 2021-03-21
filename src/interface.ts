export type TSquare = 'X' | 'O' | null | undefined;

export type THistory = {
  squares: TSquare[];
  selected: TPosition;
};

export type TPosition = {
  col: number;
  row: number;
};
