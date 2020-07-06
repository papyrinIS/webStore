import React from "react";
import styles from "./Pay.module.css"


const Pay = () => {
    return <div className={styles.pay}>
        <h3>Delivery</h3>

        <h5>across Moscow</h5>
        <p>
            The cost of delivery by courier within the Moscow ring road is 350 rubles. Delivery is carried
            out from 13:00 to 20:00 on the day of the order or the next day,
            depending on the workload of couriers.
        </p>

        <p>The cost of urgent delivery in Moscow within the Moscow ring road is 500 rubles.
            Delivery is carried out within 2-4 hours on the day of the order,
            subject to availability of couriers.
        </p>

        <p>
            The cost of evening delivery in Moscow within the Moscow ring road is 400 rubles.
            Delivery is available from 20: 00 to 00: 00.
        </p>


        <p> The cost of delivery outside the Moscow ring road is 500 rubles + 30 rubles for each km
            from the Moscow ring road. Calculated separately by the operator.
        </p>

        <p>
            Pickup from the pick – up point is free of charge. The ordered product is reserved for
            two days from the moment of order confirmation. In the event of a promotion – for one day
            (in some cases, the reservation is not possible, please check with the Manager).
            After this period, the order is canceled.
        </p>

    </div>
}

export default Pay;