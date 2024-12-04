import { Skeleton } from '@/components/ui/skeleton';

export function ProjectsSkeleton() {
  return (
    <div className='space-y-4'>
      <Skeleton className='h-9 w-full' />
      <div className='mt-8 space-y-4'>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className='flex flex-col space-y-2'>
            <div className='flex w-full flex-row space-x-2'>
              <Skeleton className='h-5 w-[100px]' />
              <div className='flex flex-1 justify-between'>
                <Skeleton className='h-5 w-[200px]' />
                <div className='flex space-x-4'>
                  <Skeleton className='h-5 w-16' />
                  <Skeleton className='h-5 w-16' />
                </div>
              </div>
            </div>
            <Skeleton className='ml-[100px] h-4 w-[60%] md:ml-[116px]' />
          </div>
        ))}
      </div>
    </div>
  );
}
