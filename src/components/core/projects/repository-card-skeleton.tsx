import { Skeleton } from '@/components/ui/skeleton';

export function RepositoryCardSkeleton() {
  return (
    <div className='mb-4 flex flex-col space-y-1 rounded-md p-2'>
      <div className='flex w-full flex-row space-x-0 md:space-x-2'>
        <div className='w-[100px]'>
          <Skeleton className='h-5 w-[80px]' />
        </div>
        <div className='flex flex-1 justify-between'>
          <Skeleton className='h-5 w-[200px]' />
          <div className='flex items-center space-x-4'>
            <Skeleton className='h-5 w-16' />
            <Skeleton className='h-5 w-16' />
          </div>
        </div>
      </div>
    </div>
  );
}
