
import { Skeleton } from '@radix-ui/themes'
const CardSkeleton = () => {
  return (
    <div className="p-6 bg-zinc-700/50 rounded-2xl flex flex-col items-center">
    {/*  image */}
    <Skeleton className="w-40 h-40 rounded-lg mb-4" />
    
    {/* title */}
    <Skeleton className="w-3/4 h-6 mb-4" />
    
    {/*  nutrition value */}
    <div className="w-full space-y-2">
      <Skeleton className="w-full h-4" />
      <Skeleton className="w-full h-4" />
      <Skeleton className="w-full h-4" />
    </div>
  </div>
  )
}

export default CardSkeleton
