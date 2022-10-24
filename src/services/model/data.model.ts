export type MoviesTypes = {
  title: string;
  id: number;
  vote_average: number;
  original_language: string;
  poster_path: string;
  genres: GenreTypes[];
  production_companies: ProductionCompaniesTypes[];
  overview: string;
  vote_count: number;
  runtime: number;
  release_date: Date;
  production_countries: ProductionCountriesTypes[];
};

export type GeneralTypes = {
  id: number;
  name: string;
};

export type GenreTypes = GeneralTypes;

export type ProductionCompaniesTypes = GeneralTypes & {
  logo_path: string;
};

export type ProductionCountriesTypes = GeneralTypes & {
  name: string;
};

export type CardPropsTypes = {
  imageSrc: string;
  dataMovies?: MoviesTypes;
};
