import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Home Page">
      <div className="text-3xl font-bold">Home page</div>
    </Layout>
  );
}
