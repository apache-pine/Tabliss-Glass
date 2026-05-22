import { API } from "../../types";

type Data = {
  time: number;
  title?: string;
  showPrefix?: boolean;
};

export type Props = API<Data>;

export const defaultData: Data = {
  time: Date.now(),
  showPrefix: true,
};
