import React from 'react';
import styles from './Produtos.module.css';
import {Link} from 'react-router-dom';
import Head from './Head';

export const Produtos = () => {
    const [produtos, setProdutos] = React.useState(null);
    
    React.useEffect(() => {    
        fetch('https://ranekapi.origamid.dev/json/api/produto')
            .then((produto) => produto.json())
            .then((produto) => setProdutos(produto))
    },[])
console.log(produtos);
    
    if(produtos === null ) return null;

    return (
        <>
        <Head title={`Ranek | Produtos`} description={"Ranek | Produtos"} />
            <div className={styles.produtos}>
                {produtos.map((produto) => {
                    return (
                        <Link to={`produto/${produto.id}`} key={produto.id}>
                            <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
                            <h1>{produto.nome}</h1>
                        </Link>  
                    )
                })}
            </div>
        </>
    )
}

