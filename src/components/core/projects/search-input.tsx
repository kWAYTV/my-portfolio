import { Search } from 'lucide-react';
import { type ChangeEvent, useCallback } from 'react';
import { useDebounce } from 'use-debounce';

import { Input } from '@/components/ui/input';

interface SearchInputProps {
  onSearch: (term: string) => void;
}

export function SearchInput({ onSearch }: SearchInputProps) {
  const [debouncedCallback] = useDebounce(
    useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        onSearch(e.target.value);
      },
      [onSearch]
    ),
    300
  );

  return (
    <div className='relative'>
      <Search className='absolute left-2 top-2.5 h-4 w-4 text-neutral-600 dark:text-neutral-400' />
      <Input
        placeholder='Search repositories...'
        onChange={debouncedCallback}
        className='h-9 w-full border-neutral-200 bg-transparent pl-8 text-base text-neutral-900 placeholder:text-neutral-600 dark:border-neutral-800 dark:text-neutral-100 dark:placeholder:text-neutral-400 md:text-sm'
      />
    </div>
  );
}