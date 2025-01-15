export default (etat, action) => {
    switch(action.type) {
        case "Supprimer_Transaction":
            return {
                ...etat,
                transactions: etat.transactions.filter(transaction => transaction.id != 
                    action.payload)
            }

        case "Ajouter_Transaction":
            return {
                ...etat,
                transactions: [action.payload, ...etat.transactions]
            }

        default:
            return etat;
    }
}