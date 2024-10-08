import React, { createContext, useContext, useState, ReactNode } from 'react';


interface TabContextType {
    selectedTab: number | null;
    setSelectedTab: (tab: number | null) => void;
    selectedCategoryName: string;
    setSelectedCategoryName: (name: string) => void;
}


const defaultContextValue: TabContextType = {
    selectedTab: null,
    setSelectedTab: () => {},
    selectedCategoryName: '',
    setSelectedCategoryName: () => {},
};

const TabContext = createContext<TabContextType>(defaultContextValue);

export const TabProvider = ({ children }: { children: ReactNode }) => {
    const [selectedTab, setSelectedTab] = useState<number | null>(null);
    const [selectedCategoryName, setSelectedCategoryName] = useState<string>('');

    return (
        <TabContext.Provider value={{ selectedTab, setSelectedTab, selectedCategoryName, setSelectedCategoryName }}>
            {children}
        </TabContext.Provider>
    );
};

export const useTabContext = () => useContext(TabContext);
