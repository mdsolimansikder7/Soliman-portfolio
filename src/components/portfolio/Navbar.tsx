"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Code2, Menu, X } from "lucide-react";
import { navItems } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="header-inner"><a className="brand" href="#home" onClick={() => setOpen(false)}><span className="brand-mark"><Code2 size={18}/></span><span>soliman<span className="brand-dot">.</span><span className="brand-dev">dev</span></span></a><nav className="desktop-nav" aria-label="Main navigation">{navItems.map(item => <a key={item.href} href={item.href} className="nav-link">{item.label}</a>)}</nav><a className="header-cta" href="#contact">Let&apos;s talk <ArrowUpRight size={15}/></a><button className="mobile-menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(v => !v)}>{open ? <X size={21}/> : <Menu size={21}/>}</button></div><AnimatePresence>{open && <motion.nav className="mobile-nav" initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}} exit={{opacity:0,height:0}} aria-label="Mobile navigation">{navItems.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}<ArrowUpRight size={15}/></a>)}</motion.nav>}</AnimatePresence></header>;
}
