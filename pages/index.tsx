import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Company, PrismaClient } from "@prisma/client";

import { InferGetServerSidePropsType } from "next"
import { Key, ReactChild, ReactFragment, ReactPortal } from 'react';


const prisma = new PrismaClient();
//export default function UserPage({ companies }: InferGetServerSidePropsType<typeof getServerSideProps>) {

const Home = ({companies}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
const comp:Company[] = companies;
  console.log(companies);
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Spring&Hugo App</title>
        <meta name="description" content="Spring&Hugo App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Companies</h1>
        <ul>
          {comp.map((company) => (
            <li key={company.id}>
              <a href={`/company/${company.id}`}>{company.name}</a>
              <p>{company.adress}</p>
            </li>
          ))}
        </ul>
      </div>
 
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {


  const companies = await prisma.company.findMany();
  console.log(companies);

  return {
    props: { companies },
  }
}

export default Home
