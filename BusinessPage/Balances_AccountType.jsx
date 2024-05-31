import React from 'react';
import "./global.scss";
import "./index.scss";
const Root = ({}) => {
React.useEffect(() => {
// Initialize the code
return () => {}
}, [])
return (
<div className={'account-type'}>
    <div className={'header'}>
        <div className={'credit-card'}>
            Credit Card
        </div>
        <div className={'type'}>
            <div className={'frame-40714'}>
                <div className={'master-card'}>
                    Master Card
                </div>
            </div>
            <div className={'icon'}>
                <div className={'mastercard'}>
                    <img src="https://image-resource.creatie.ai/124019209528853/124019209528855/ae2ef4f70fc7554135cb3302f2bc8431.png" className={'mastercard-logo-1'} />
                </div>
            </div>
        </div>
    </div>
    <div className={'content'}>
        <div className={'account-details'}>
            <div className={'account-number'}>
                <div className={'text-133-456-886-8'}>
                    3388 4556 8860 8***
                </div>
                <div className={'account-number-1'}>
                    Account Number
                </div>
            </div>
            <div className={'total-amount'}>
                <div className={'text-25000'}>
                    $25000
                </div>
                <div className={'total-amount-1'}>
                    Total amount
                </div>
            </div>
        </div>
        <div className={'footer'}>
            <div className={'remove'}>
                Remove
            </div>
            <div className={'button'}>
                <div className={'details'}>
                    Details
                </div>
                <svg id="0:1518" className={'chevron-right'}></svg>
            </div>
        </div>
    </div>
</div>
);
};
export default Root
