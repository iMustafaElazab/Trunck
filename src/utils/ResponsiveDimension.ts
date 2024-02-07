export const percentWidth = (fullWidth: number, percent?: number) =>
  fullWidth * ((percent || 100) / 100);

export const percentHeight = (fullHeight: number, percent?: number) =>
  fullHeight * ((percent || 100) / 100);
