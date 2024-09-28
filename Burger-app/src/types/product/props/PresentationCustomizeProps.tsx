import { Option } from "../Customize";

export interface PresentationCustomizeProps {
    isPressed: boolean;
    handlePress: () => void;
    data: {
      product: {
        id: number;
        imageUrl: string;
        name: string;
        price: number;
      };
      options: Option[];
    };
  }