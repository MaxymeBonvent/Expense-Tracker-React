import React, {useState, useContext} from 'react'
import {contexteGlobal} from "../context/GlobalState.js";

const AddTransaction = () => {
    const [text, setText] = useState("");
    const [montant, setMontant] = useState(0);

    const {ajouterTransaction} = useContext(contexteGlobal)

    const handleSubmit = e => {
      e.preventDefault();

      const newTransaction = {
        id: Math.floor(Math.random() * 10000),
        txt: text,
        montant: +montant
      }

      ajouterTransaction(newTransaction);
    }

  return (
    <form onSubmit={handleSubmit}>
        <fieldset>Ajout de transactions</fieldset>
      {/* DESCRIPTION */}
      <label htmlFor="description">Description</label>
      <input id="description" name="description" type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Décrivez votre transaction" maxLength={300}></input>

      {/* MONTANT */}
      <label htmlFor="montant">Montant &#40;€&#41;</label>
      <input id="montant" name="montant" type="number" value={montant} onChange={(e) => setMontant(e.target.value)} placeholder="000" max={9999999999}></input>

      {/* BOUTON SUBMIT */}
      <input id="submit" name="submit" type="submit" value="Ajouter"></input>
    </form>
  )
}

export default AddTransaction