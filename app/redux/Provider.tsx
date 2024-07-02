"use client"
import React from 'react'
import { Provider } from 'react-redux'
import { NextUIProvider } from '@nextui-org/react';
import { store } from './Store';

export default function Providers({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <NextUIProvider>
    <Provider store={store}>{children}</Provider>
  </NextUIProvider>
);  
}
