import React, { useContext, useEffect, useState, useCallback } from 'react'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    

    return (
        <AppContext.Provider value="hello">
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, AppContext }