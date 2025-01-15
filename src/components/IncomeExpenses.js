import React, {useContext} from 'react'
import {contexteGlobal} from "../context/GlobalState.js";

const IncomeExpenses = () => {
  // Variable de l'ensemble des transactions
  const {transactions} = useContext(contexteGlobal);

  // Ensemble des montants
  const montants = transactions.map(transaction => transaction.montant);

  // Somme des revenus
  const sommeRevenus = montants.filter(item => item > 0).reduce((accu, item) => (accu += item), 0).toFixed(2);

  // Somme des dépenses
  const sommeDepenses = montants.filter(item => item < 0).reduce((accu, item) => (accu += item), 0).toFixed(2);

  return (
    <div id="div_revenus_depenses">

        {/* REVENUS */}
        <div id="div_revenus">
            
            <h3>Revenus</h3>
            <p id="montant_revenus">&#43;{sommeRevenus}&euro;</p>

        </div>

        {/* DÉPENSES */}
        <div id="div_depenses">
            
            <h3>Dépenses</h3>
            <p id="montant_depenses">{sommeDepenses}&euro;</p>
            
        </div>
      
    </div>
  )
}

export default IncomeExpenses