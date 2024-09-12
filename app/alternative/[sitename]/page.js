"use client"; // Add this directive to make it a Client Component

import React from 'react';
import { useParams } from 'next/navigation'; // Import useParams from Next.js
import Header from '@/components/Header';
import FeaturePage from '@/components/Features';
import Hero from '@/components/Hero';
import Head from 'next/head'; // Import for SEO metadata
import quizMakers from '../../data/quizMakers'; // Import quiz maker data from the data folder

const QuizMakerList = () => {
  const params = useParams();
  const siteName = params.sitename;

  return (
    <>
      <Head>
        <title>{siteName} Alternatives | Best Quiz Makers</title>
        <meta
          name="description"
          content={`Explore top alternatives to ${siteName}. Find the best quiz makers for your needs.`}
        />
        <style>{`
          .companies-container {
            display: grid;
            grid-template-columns: repeat(4, 1fr); /* 4 items per row */
            gap: 20px;
            padding: 50px;
            justify-content: center;
          }

          .company-card {
            background-color: #f3f4f6; /* Light gray background for the card */
            border: 1px solid #ddd;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            padding: 20px;
            text-align: center;
            transition: transform 0.3s, box-shadow 0.3s;
            cursor: pointer;
          }

          .company-card:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Slightly deeper shadow on hover */
            cursor: pointer; /* Native system thumb cursor */
          }

          .company-name {
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 10px;
            background-color: #e0f7fa; /* Each company gets a specific bg color */
            padding: 15px;
            border-radius: 5px;
          }
        `}</style>
      </Head>

      <Header />
      <br /><br /><br /><br /><br /><br />

      <h1 className="text-7xl font-bold text-gray-900 mb-4 text-center">
        <span className="pl-5 pr-5 text-white bg-blue-500 text-7xl text-center">
          {siteName} Alternative
        </span>
      </h1>

      <br /><br /><br /><br />

      <Hero />
      <FeaturePage />

      {/* Companies List Section */}
      <section className="mt-10 items-center justify-center">
        <h2 className="text-4xl font-semibold text-center mb-6">Top Quiz Makers</h2>
        
        <div className="companies-container text-center justify-center">
          {quizMakers.map((quizMaker, index) => (
            <div
              key={index}
              className="company-card"
              onClick={() => window.open(quizMaker.url, '_blank')}
            >
              <div className="company-name text-3xl">{quizMaker.name}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default QuizMakerList;
