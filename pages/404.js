import Link from "../src/components/Link"

export default function Page404() {

    return (
        <div>
            <div>
                <h1> 404 </h1>
                <img src="../public/img/erro-alura.svg" width={420}/>
                <h3> Eita! parece que você está perdido </h3>
            </div>
            <Link href="/">
                <a> Voltar para Home </a>
            </Link>
        </div>
    )
}
