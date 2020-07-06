import React from "react";
import styles from "./Guarantee.module.css"


const Guarantee = () => {
    return <div className={styles.guarantee}>
        <h3>Warranty and refund</h3>
        <p>
            By purchasing equipment in our store, You can be absolutely sure that you will get a brand new,
            original product that is covered by the warranty.
        </p>
        <p>
            The warranty period, during which free repairs are made, is set by the manufacturer.
        </p>
        <h5>
            Warranty conditions
        </h5>
                <ul>
                    <li>The warranty period of 1 year from the date of purchase applies to: all Apple, Samsung,
                        smartphones,
                        tablets, personal computers, game consoles, speakers, household appliances;
                    </li>
                    <li>The warranty period of 6 months from the date of purchase applies to: smart gadgets, smart
                        watches
                        (except for Apple and Samsung smartwatches), headphones (except for Apple, Samsung and JBL
                        headphones);
                    </li>
                    <li>
                        The warranty period of 1 month from the date of purchase applies to: all accessories,
                        portable batteries, network chargers;
                    </li>
                    <li>
                        For more information, contact the Manager by phone.
                    </li>

                    <li>
                        The guarantee is based on a warranty card or other documents provided by our store;
                    </li>
                    <li>
                        Transportation of goods weighing less than 5 kg back to the seller for exchange/refund,
                        as well as for diagnostics and warranty service is performed by the buyer independently.
                    </li>
                </ul>
    </div>
}

export default Guarantee;