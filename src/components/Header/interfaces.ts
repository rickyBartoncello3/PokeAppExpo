export interface HeaderProps {
  searchQuery: string;
  handleOnChange: (searchQuery: string) => void;
  showFavorites: boolean;
  handleShowFavorites: () => void;
}
