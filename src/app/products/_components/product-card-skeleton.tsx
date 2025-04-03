export function ProductCardSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col h-full animate-pulse">
      <div className="relative h-64 bg-gray-200 dark:bg-gray-700 p-4 flex items-center justify-center">
        <div className="w-[200px] h-[200px] bg-gray-300 dark:bg-gray-600 rounded" />
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <div className="mb-2">
          <div className="inline-block w-20 h-6 bg-gray-200 dark:bg-gray-700 rounded-full mb-2" />
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-1" />
          <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded" />
        </div>

        <div className="mt-auto">
          <div className="flex items-center justify-between">
            <div className="w-16 h-6 bg-gray-200 dark:bg-gray-700 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}
