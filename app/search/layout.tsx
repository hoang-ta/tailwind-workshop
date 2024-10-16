import { Header } from '@/components/header';

export default function Layout({ children }) {
  return (
    <div className='h-full'>
      <Header />
      {children}
    </div>
  );
}
