import { ModifierOption, Option } from "../Customize";
 
export  interface PropsModifierList {
    modifierName: string;
    options: ModifierOption[];
    modifierId: number;
    product: {
      id: number;
      name: string;
      price: number;
      imageUrl: string;
    };  
    onClick: (option: ModifierOption, modifierId: number, modifierName: string) => void;
    selectedOptions:Option[];
  }
  