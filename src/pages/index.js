import React from 'react';
import Profile from './qcomps/profile_mistake';
// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css';
// Renamed the second Profile import to avoid naming conflict
import ProfileComponent from './components/profile';

export default function Home() {
  return (
    <div className={styles.main}>
        {}
        <Profile />
        {}
    </div>
  );
}
