import React, {useContext} from 'react'
import {contexteGlobal} from "../context/GlobalState.js";

const Transaction = ({transaction}) => {
  const {supprimerTransaction} = useContext(contexteGlobal)

  // Détermination du signe du montant
  const signe = transaction.montant < 0 ? "-" : "+";

  return (
    // Liste des transactions dans l'Historique
    <li className={transaction.montant < 0 ? "dépense" : "revenu"}>
        <span>
          <button className="btn_suppr_trsc" onClick={() => supprimerTransaction(transaction.id)}>X</button>
          {transaction.txt}
        </span> 

        {/* MONTANT */}
        <span>{signe}{Math.abs(transaction.montant)}&euro;</span>
    </li>
  )
}

export default Transaction