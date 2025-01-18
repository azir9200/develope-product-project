export type TProduct = {
  _id: string;
  title: string;
  content: string;
  image: string;
  category: string;
  tags: string;
  author: string;
  upVotes: number;
  downVotes: number;
  createdAt: Date;
  updatedAt: Date;
  isPremium: boolean;
  isVerified: boolean;
};
