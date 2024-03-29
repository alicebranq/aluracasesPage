import Head from "next/head";
import PageTitle from "../src/components/PageTitle/PageTitle";
import { useEffect, useState } from "react";
import { theme } from "../src/theme/theme";
import Link from "../src/components/Link";

export async function getStaticProps() {
    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
    const faq = await fetch(FAQ_API_URL)
        .then((serverResponse) => {
            return serverResponse.json()
        })
        .then((response) => {
            return response
        });
    
    return {
        props: {
            qualquercoisa: 'que eu passar aqui',
            faq,
        }
    }
}

export default function FAQ(props) {
    console.log(faq);
    // const [faq, setFaq] = useState([]);
        
    return (    
        <div>
            <Head>
                <PageTitle>
                    FAQ - Alura Cases
                </PageTitle>
            </Head>
            <Link href="/">
                <a> Home </a>
            </Link>
            <ul>
                {faq.map( ({answer, question}) => (
                    <li key={question}>
                        <article> 
                            <h2> {question} </h2>
                            <p> {answer} </p>
                        </article>   
                    </li> )
                )}
            </ul>
        </div>
    )
}
