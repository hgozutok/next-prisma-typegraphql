import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Company, PrismaClient } from "@prisma/client";
import { ReactChild, ReactFragment, ReactPortal } from 'react';



const prisma = new PrismaClient();
const Home: NextPage<Company[]> = (companies: Company[]) => {
  console.log(companies);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Companies</h1>
        <ul>
          {companies.companies.map(company => (
            <li key={company.id}>
              <a href={`/company/${company.id}`}>{company.name}</a>
              <p>{company.adress}</p>
            </li>
          ))}
        </ul>
      </div>
      {/* {
  companies?.map((company:Company)=>{

  return (
    <div>
      <h1>{company.name}</h1>
      <p>{company.adress}</p>
    </div>
  )
})} */}



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
