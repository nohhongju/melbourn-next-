import styles from "@/styles/Home.module.css";

export function Home() {
    return (
        <> < header className = {styles.w3DisplayContainer+ ' ' + styles.w3Content+ ' ' + styles.w3Center} style = {{maxWidth:"1500px"}} > <img
        className={styles.w3Image}
            src="https://www.w3schools.com/w3images/photographer.jpg"
            alt="Me"
            width="1500"
            height="600"/>
        <div
            className={styles.w3DisplayMiddle + ' ' + styles.w3PaddingLarge + ' ' + styles.w3Border + ' ' + styles.w3Wide + ' ' + styles.w3TextLightGrey + ' ' + styles.w3Center}>
            <h1 className={styles.w3HideMedium+ ' ' +styles.w3HideSmall+ ' ' +styles.w3Xxxlarge}>JANE DOE</h1>
            <h5 className={styles.w3HideLarge} style={{whiteSpace:"nowrap"}}>JANE DOE</h5>
            <h3 className={styles.w3HideMedium+ ' ' +styles.w3HideSmall}>PHOTOGRAPHER</h3>
        </div>

        <div
            className={styles.w3Bar+ ' ' +styles.w3LightGrey+ ' ' +styles.w3Round+ ' ' +styles.w3DisplayBottommiddle+ ' ' +styles.w3HideSmall}
            style={{bottom:"-16px"}}>
            <a href="#" className={styles.w3BarItem+ ' ' +styles.w3Button}>Home</a>
            <a href="#portfolio" className={styles.w3BarItem+ ' ' +styles.w3Button}>Portfolio</a>
            <a href="#contact" className={styles.w3BarItem+ ' ' +styles.w3Button}>Contact</a>
        </div>
    </header>

    <div className={styles.w3Center+ ' ' +styles.w3LightGrey+ ' ' +styles.w3Padding16+ ' ' +styles.w3HideLarge+ ' ' +styles.w3HideMedium}>
        <div className={styles.w3Bar+ ' ' +styles.w3LightGrey}>
            <a href="#" className={styles.w3BarItem+ ' ' +styles.w3Button}>Home</a>
            <a href="#portfolio" className={styles.w3BarItem+ ' ' +styles.w3Button}>Portfolio</a>
            <a href="#contact" className={styles.w3BarItem+ ' ' +styles.w3Button}>Contact</a>
        </div>
    </div>
    <div className={styles.w3Content +' '+ styles.w3PaddingLarge +' '+ styles.w3MarginTop} id="portfolio">

        <div
            className={styles.w3LightGrey +' ' + styles.w3PaddingLarge +' '+ styles.w3Padding32 +' '+ styles.w3MarginTop}
            id="contact">
            <h3 className={styles.w3Center}>Contact</h3>
            <hr/>
            <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed
                mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan
                tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent
                tincidunt sed tellus.</p>

            <form action="/action_page.php" target="_blank">
                <div className={styles.w3Section}>
                    <label>Name</label>
                    <input className={styles.w3Border} type="text" required="" name="Name"/>
                </div>
                <div className={styles.w3Section}>
                    <label>Email</label>
                    <input className={styles.w3Input +' '+ styles.w3Border} type="text" required="" name="Email"/>
                </div>
                <div className={styles.w3Section}>
                    <label>Message</label>
                    <input className={styles.w3Input +' '+ styles.w3Border} required="" name="Message"/>
                </div>
                <button type="submit" className={styles.w3Button +' '+ styles.w3Block +' '+ styles.w3DarkGrey}>Send</button>
            </form><br/>
            <p>Powered by
                <a
                    href="https://www.w3schools.com/w3css/default.asp"
                    target="_blank"
                    className={styles.w3HoverTextGreen}>w3.css</a>
            </p>

        </div>

    </div>

</>
    )
}