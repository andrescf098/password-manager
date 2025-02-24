export interface CardDataProps {
  element: {
    name: string | null;
    id: string;
    typeElement: string;
    isFavourite: boolean;
    urlWebsite: string | null;
    username: string | null;
    password: string | null;
    note: string | null;
    userId: string;
    directory: string | null;
    createAt: Date;
    updateAt: Date;
  };
}
