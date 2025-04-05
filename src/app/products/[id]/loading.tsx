export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 flex items-center justify-center border border-gray-200 dark:border-gray-700 animate-pulse">
          <div className="w-full h-80 bg-gray-300 dark:bg-gray-600 rounded"></div>
        </div>
        <div className="flex flex-col space-y-4 animate-pulse">
          <div className="w-24 h-6 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
          <div className="w-3/4 h-8 bg-gray-300 dark:bg-gray-600 rounded"></div>
          <div className="flex items-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-5 h-5 bg-gray-300 dark:bg-gray-600 rounded-full"
              />
            ))}
            <div className="w-20 h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
          </div>
          <div className="w-1/2 h-10 bg-gray-300 dark:bg-gray-600 rounded"></div>
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6 space-y-2">
            <div className="w-1/3 h-6 bg-gray-300 dark:bg-gray-600 rounded"></div>
            <div className="space-y-1">
              <div className="w-2/3 h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
              <div className="w-1/2 h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
              <div className="w-3/4 h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex space-x-8">
          <div className="py-4 px-1 w-20 h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
          <div className="py-4 px-1 w-28 h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 animate-pulse">
        <div className="space-y-4">
          <div className="w-1/2 h-6 bg-gray-300 dark:bg-gray-600 rounded"></div>
          <div className="w-full h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
          <div className="w-full h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
          <div className="w-5/6 h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
        </div>
      </div>
    </div>
  );
}
