import styles from '../components/Header.module.css'
import React, {useState} from 'react'
import Link from 'next/link'
import LinkItem from './LinkItem'



const LinkMenu = (itens) => (
    <li>
        <Link href={itens.link}>
            <a title={itens.label}>{itens.label}</a>
        </Link>
    </li>
)

export default function Nav(props){


    return (
        <nav className={`${ styles.menu} ${styles[props.isOpen]}`}>
                    <div>
                        
                    <ul>
                        {LinkItem.map((item)=> (
                            <LinkMenu key={item.id} link={item.link} label={item.label} />
                        ))}
                    </ul>
                    </div>
                    <Link href='register'>
                        <a title='Cadastre-se/Login' className={ styles['btn-register']}>Registre-se / Login</a>
                    </Link>
                </nav>
    )
}