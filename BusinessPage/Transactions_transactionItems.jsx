import React from 'react';
import "./global.scss";
import "./index.scss";
const Root = ({}) => {
React.useEffect(() => {
// Initialize the code
return () => {}
}, [])
return (
<div className={'transaction-item'}>
    <div className={'item-name'}>
        <div className={'name'}>
            <div className={'items'}>
                Items
            </div>
        </div>
    </div>
    <div className={'item-name-1'}>
        <div className={'shop-name-payment-method'}>
            <div className={'ngo-name'}>
                NGO Name
            </div>
            <div className={'date'}>
                Date
            </div>
            <div className={'payment-method'}>
                Payment Method
            </div>
        </div>
        <div className={'price'}>
            <div className={'amount'}>
                Amount
            </div>
        </div>
    </div>
</div>
);
};
export default Root
