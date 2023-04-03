import Image from "next/image";
import styles from "../NameMascot.module.css"
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function NameCard() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        username: ''
    })
    const [clicked, setClicked] = useState(false);
    const showError = ()  =>  {
        setClicked(true);
    }
    const CheckLogin = () => {
        console.log(formData.username)
        console.log(formData)

        if (formData.username !== null) {
            router.push(
                {
                    pathname: './learning',
                    query: {
                        username: formData.username
                    }
                }
            )
        }
    }

    const isUsernameValid = /^[a-zA-Z]{2,6}$/.test(formData.username);
    const showErrorMessage = !isUsernameValid && formData.username.length > 0 ||clicked && !isUsernameValid;

    return (
        <>

            <div className={styles.container}>
                <div className={styles.question__triangle}><span></span></div>
                <div className={styles.question__dialog__sp}>
                    <h3 className={styles.question__dialog__reg}>
                        Your Name is:
                    </h3>
                    <input
                        className={styles.form}
                        placeholder="2-6 Letters, Alphabets Only"
                        type="text"
                        id="username"
                        name="username"
                        required
                        title="2-6 Letters, Alphabets Only"
                        pattern="[a-zA-Z]{2,6}"
                        onChange={(e => setFormData({ ...formData, username: e.target.value }))}
                    />
                    {showErrorMessage && (
                        <div className={styles.error}>
                            Please enter 2-6 letters (Alphabets).
                        </div>
                    )}
                </div>

                <div className={styles.img}><Image src="/tutorial-mascot.png" alt="mascot image" width={200} height={215} /></div>

                {
                    !isUsernameValid ? (
                        <div className={styles.btn__l__disabled}>
                            <button className={styles.btn__l__disabled}
                                type="submit" onClick={() => showError()}>
                                Confirm
                            </button>
                        </div>
                    ) : (
                        <div className={styles.btn__l}><Link href="/name">
                        <button className={styles.btn__l}
                            type="submit" onClick={() => CheckLogin()}>
                            Confirm
                        </button>
                    </Link></div>
                    )
                }

            </div>

        </>




    )
}