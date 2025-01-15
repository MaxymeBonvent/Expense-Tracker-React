import React, {useContext} from 'react'
import {contexteGlobal} from "../context/GlobalState.js";

const Balance = () => {
  // Variable de l'ensemble des transactions
  const {transactions} = useContext(contexteGlobal);

  // Ensemble des montants
  const montants = transactions.map(transaction => transaction.montant);

  // Somme des montants, le solde
  const solde = montants.reduce((accumulator, item) => (accumulator += item), 0).toFixed(2)
  
  return (
    <div id="div_solde">
      <h3>Votre solde :</h3>
      <p id="solde">{solde}€</p>
    </div>
  )
}

export default Balance