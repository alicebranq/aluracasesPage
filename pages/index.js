import React from "react"
import { Children } from "react"
import Link from "../src/components/Link"
import GlobalStyle from "../src/theme/GlobalStyle";


function Title({children, as}) {
    const Tag = as;
    return (
        <React.Fragment>
            <Tag>
                {children}
            </Tag>
            <style jsx>{`
                ${Tag} {
                    color: red;
                }
            `} </style>
        </React.Fragment>
    )
}

export default function HomePage() {

    return (
        <div>
            <GlobalStyle />
            <h1> Alura Cases - Home Page </h1>
            <Link href="/fac">
                <a> Ir para FAQ </a> 
            </Link>
        </div>
    )
}