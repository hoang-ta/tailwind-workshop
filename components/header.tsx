import { cn } from '@/lib/utils';
import {
  LucideIcon,
  Map,
  Settings,
  ShoppingBag,
} from 'lucide-react';

function NavButton({
  icon: Icon,
  active,
}: {
  icon: LucideIcon;
  active?: boolean;
}) {
  return (
    <button
      className={cn(
        'p-2 rounded-lg border border-red-600',
        active && 'bg-blue-500/30'
      )}
    >
      <Icon />
    </button>
  );
}

export function Header() {
  return (
    <nav className='bg-red-400 h-20 border-b'>
      <div className='flex justify-between max-w-screen-md bg-blue-700 mx-auto h-full items-center'>
        <div className='bg-yellow-100 text-blue-700'>
          Logo
        </div>
        <div className='bg-green-100 flex gap-4'>
          <NavButton active icon={Map}></NavButton>
          <NavButton icon={ShoppingBag}></NavButton>
          <NavButton icon={Settings}></NavButton>
        </div>
        <div className='bg-pink-100 flex gap-4'>
          <div>Icon1</div>
          <div>Icon2</div>
          <div>Icon3</div>
        </div>
      </div>
    </nav>
  );
}
