import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { Outlet } from 'react-router-dom';
import SearchHeader from './components/SearchHeader';

export default function App() {

  const client = new QueryClient();
  return (
    <>
      <SearchHeader />
      <QueryClientProvider client={client}>
        <Outlet />
      </QueryClientProvider>
    </>
  );
}

