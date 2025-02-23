"use client";
import '../app/globals.css';

import { Header } from "../components/header";
import  Body from "../components/body"

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-hero-pattern bg-cover bg-center h-screen">
        <Body/>
      </main>
    </>
  );
}
