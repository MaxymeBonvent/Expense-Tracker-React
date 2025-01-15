import React, {createContext, useReducer} from "react";
import AppReducer from "./AppReducer.js";

// État initial
const etatInitial = {
    transactions: []
}

// Création du contexte
export const contexteGlobal = createContext(etatInitial)

// Composant du Provider
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, etatInitial)

    // Actions
    function supprimerTransaction(id) {
        dispatch({
            type: "Supprimer_Transaction",
            payload : id
        });
    }

    function ajouterTransaction(transaction) {
        dispatch({
            type: "Ajouter_Transaction",
            payload : transaction
        });
    }

    return (
        <contexteGlobal.Provider value={{
            transactions: state.transactions,
            supprimerTransaction,
            ajouterTransaction
        }}>
            {children}
        </contexteGlobal.Provider>
    )
}

export default GlobalProvider