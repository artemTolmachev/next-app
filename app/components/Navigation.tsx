'use client'
import Link from "next/link";
import {usePathname} from 'next/navigation'
import { type } from "os";


type NavLink = {
 lable: string;
 href: string;
}

type Props = {
    navLinks: NavLink[];
}

const Navigation = ({navLinks}: Props) => {
    const pathname = usePathname();
    console.log(pathname)
    return (
    <>
        {navLinks.map(link => {
            const isActive = pathname === link.href
            return(
                <Link 
                    className={isActive ? 'active' : ''}
                    href={link.href}
                    >
                    {link.lable}
                </Link>
            )
        })}    
    </>
    )
};

export {Navigation};