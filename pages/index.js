import Image from "next/image"
import styles from "../styles/Home.module.css"

export default function Home() {
    // How do we show the recently listed NFTs

    // We will index the events off-chain and then read from our database.
    // Setup a server to listen for those events to be fired, and we will add them to a database to query.

    // TheGraph does this in a decentralised way
    // Moralis does this in a centralised way and comes with a ton of other features.

    // All our logic is 100% on chain
    // Speed & Development time.
    // Its really hard to start a prod blockchain project 100% decentralised.
    // They are working on open sourcing their code.
    // Feature Richness.
    // We can create more features with a centralised back-end to start
    // As more decentralised tools are being created.
    // Local development.
    return <div className={styles.container}>Hi!</div>
}
