import React, {useContext} from 'react';
import {GlobalContext} from "../context/GlobalState";

import Transaction from "./Transaction";

const TransactionList = () => {
    const {transactions} = useContext(GlobalContext);

    const list = (
        <ul className="list">
            {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>))}
        </ul>
    );

    return (
        <div>
            <h3>History</h3>
            {transactions.length ? list : 'No transaction history yet.'}
        </div>
    );
};

export default TransactionList;