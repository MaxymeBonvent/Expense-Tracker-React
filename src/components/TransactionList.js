import React, {useContext} from 'react'
import {contexteGlobal} from "../context/GlobalState.js";
import Transaction from "./Transaction.js";

const TransactionList = () => {
  // Variable de l'ensemble des transactions
  const {transactions} = useContext(contexteGlobal);

  return (
    <div id="div_historique">

      <h3>Historique des transactions</h3>

      <ul>
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>))}
      </ul>

    </div>
  )
}

export default TransactionList