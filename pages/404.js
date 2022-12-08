import Link from "../src/components/Link"

export default function Page404() {

    return (
        <div>
            <h1> 404 </h1>
            <h3> Eita! parece que você está perdido </h3>
            <Link href="/">
                <a> Voltar para Home </a>
            </Link>
        </div>
    )
}
