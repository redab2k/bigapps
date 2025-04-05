export function ProductCardSkeleton() {
  return (
    <div className="bg-white dark:bg-green-900 rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg border border-green-200 dark:border-green-700 flex flex-col h-full animate-pulse">
      <div className="relative h-64 bg-green-100 dark:bg-green-800 p-4 flex items-center justify-center">
        <div className="w-[200px] h-[200px] bg-green-200 dark:bg-green-700 rounded" />
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <div className="mb-2">
          <div className="inline-block w-20 h-6 bg-green-100 dark:bg-green-700 rounded-full mb-2" />
          <div className="h-6 bg-green-100 dark:bg-green-700 rounded mb-1" />
          <div className="h-6 w-3/4 bg-green-100 dark:bg-green-700 rounded" />
        </div>

        <div className="mt-auto">
          <div className="flex items-center justify-between">
            <div className="w-16 h-6 bg-green-100 dark:bg-green-700 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}
