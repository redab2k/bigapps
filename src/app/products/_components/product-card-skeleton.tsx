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
        <div className="flex-grow my-4 space-y-2">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded" />
          <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded" />
        </div>
        <div className="mt-auto">
          <div className="flex items-center mb-2">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded-full"
                />
              ))}
            </div>
            <div className="ml-2 w-24 h-4 bg-gray-200 dark:bg-gray-700 rounded" />
          </div>
          <div className="flex items-center justify-between">
            <div className="w-16 h-6 bg-gray-200 dark:bg-gray-700 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}
