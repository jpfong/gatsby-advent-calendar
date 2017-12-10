import React from "react";
import Link from "gatsby-link";
import styles from "./dayLink.module.css";

class DayLink extends React.Component {

    constructor() {
        super()
    }

    render() {
        const { id, slug, link } = this.props

        const today = new Date()

        // can't see the link if we are not december and the day before the value of the link
        if ((today.getDate() < link && today.getMonth() === 11) || today.getMonth() !== 11) {
            return (
                <div className={styles.disable}>
                    <h3>{link}</h3>
                </div>
            )
        }

        return (
            <Link to={slug} className={styles.item}>
                <h3>{link}</h3>
            </Link>
        )
    }
}

export default DayLink;