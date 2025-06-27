"use client";
import styles from "./page.module.css";
// import axios from "axios";
import {useEffect, useState} from "react";
import PropertiesList from "@/components/PropertiesList";
import {formatPricing} from "@/helpers/numbers";
import Head from "next/head";
import { getProperties } from "@/mocks/mockApi";
// import MockDemo from "@/components/MockDemo"; // Removed for production-like experience

// Example async function to fetch properties from mock API
async function fetchProperties() {
    // const response = await axios.get("http://127.0.0.1:8004/properties");
    // return response.data;
    return await getProperties();
}

export default function Home() {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetchProperties()
            .then((propertiesList) => {
                // Format pricing and store in state
                const formatted = propertiesList.map((p) => ({
                    ...p,
                    minPrice: formatPricing(p.minPrice),
                    maxPrice: formatPricing(p.maxPrice),
                }));
                setProperties(formatted);
            })
            .catch((e) => {
                console.log("Error fetching properties:", e.message);
            });
    }, []);

    return (
        <>
            <Head>
                <title>HouseLy App - Home</title>
                <meta
                    name="description"
                    content="Browse houses and properties available for sale or rent."
                />
            </Head>
            
            <main className={styles.main}>
                <h1>HouseLy App</h1>
                {/* Render the properties list once data is available */}
                {properties.length > 0 ? <PropertiesList properties={properties}/> : <p>Loading...</p>}
            </main>
        </>
    );
}
