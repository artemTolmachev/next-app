import Link from 'next/link'
import { Navigation } from './Navigation';
const navItems = [
  {lable: 'Home', href: '/'},
  {lable: 'Blog', href: '/blog'},
  {lable: 'About', href: '/about'},
]

const TheHeader = () => {
  return (
    <header>
       <Navigation navLinks= {navItems}/>
    </header>
  );
};

export {TheHeader};