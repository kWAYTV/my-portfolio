import { Skeleton } from '@/components/ui/skeleton';

export function RepositoryCardSkeleton() {
  return (
    <div className='group rounded-md p-2'>
      <div className='flex w-full flex-col space-y-2'>
        <div className='flex flex-col space-y-2 sm:flex-row sm:items-start sm:justify-between'>
          <div className='flex items-center gap-2'>
            <Skeleton className='h-5 w-[150px]' />
            <Skeleton className='h-4 w-4' />
          </div>
          <div className='flex items-center gap-4'>
            <Skeleton className='h-4 w-24 sm:inline' />
            <div className='flex items-center gap-2'>
              <div className='flex items-center gap-1'>
                <Skeleton className='h-4 w-4' />
                <Skeleton className='h-4 w-6' />
              </div>
              <div className='flex items-center gap-1'>
                <Skeleton className='h-4 w-4' />
                <Skeleton className='h-4 w-6' />
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-x-4'>
          <div className='flex items-center gap-2'>
            <Skeleton className='h-5 w-20' />
            <Skeleton className='h-4 w-24 sm:hidden' />
          </div>
          <Skeleton className='h-4 w-full max-w-[500px]' />
        </div>
      </div>
    </div>
  );
}
