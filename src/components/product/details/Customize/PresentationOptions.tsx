import React, { useState } from "react";
import ModifierList from "./ModifierList";
import ConnectedCustumize from "./ConnectedCustumize";
import { useCartStore } from "@/src/store/cart/cartStore";
import { ModifierOption, Option } from "@/src/types/product/Customize";
import { PresentationCustomizeProps } from "@/src/types/product/props/PresentationCustomizeProps";

const PresentationCustomize = ({ handlePress, isPressed, data }: PresentationCustomizeProps) => {
  const { addOption } = useCartStore(state => state);
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

  const handleCheckboxPress = (option: ModifierOption, modifierId: number, modifierName: string) => {
    setSelectedOptions(prev => {
      const existingModifier = prev.find(selected => selected.modifireId === modifierId);
      const updatedOptions = existingModifier 
        ? existingModifier.modifireOptions.some(opt => opt.modifierOptionId === option.modifierOptionId)
          ? existingModifier.modifireOptions.filter(opt => opt.modifierOptionId !== option.modifierOptionId)
          : [...existingModifier.modifireOptions, option]
        : [option];

      return existingModifier 
        ? prev.map(selected => 
            selected.modifireId === modifierId 
              ? { ...existingModifier, modifireOptions: updatedOptions } 
              : selected
          )
        : [...prev, { modifireId: modifierId, modifierName, modifireOptions: updatedOptions }];
    });
  };

  const handleSaveButton = async () => {
    const options = selectedOptions.map(selected => ({
      modifireId: selected.modifireId,
      modifierName: selected.modifierName,
      modifireOptions: selected.modifireOptions,
    }));

    await addOption({
      id: data.product.id,
      imageUrl: data.product.imageUrl,
      name: data.product.name,
      price: data.product.price,
      quantity: 0,
      options,
      note:null
    });
    
    handlePress();
  };

  return (
    <ConnectedCustumize isPressed={isPressed} handlePress={handlePress} handleOnClickSave={handleSaveButton}>
      {data?.options?.map((modifier: Option) => (
        <ModifierList
          key={modifier.modifireId}
          modifierName={modifier.modifierName}
          options={modifier.modifireOptions}
          modifierId={modifier.modifireId}
          product={data.product}
          onClick={handleCheckboxPress}
          selectedOptions={selectedOptions}  
        />
      )) || null}
    </ConnectedCustumize>
  );
};

export default PresentationCustomize;