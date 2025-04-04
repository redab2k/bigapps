export default function ProductTableSkeleton() {
  const skeletonRows = Array(5).fill(null);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Image
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Title
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell"
            >
              Price
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell"
            >
              Category
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {skeletonRows.map((_, index) => (
            <tr key={index}>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="h-12 w-12 rounded bg-gray-200 animate-pulse"></div>
              </td>
              <td className="px-4 py-4">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
                <div className="h-3 bg-gray-200 rounded max-w-[200px] animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-16 mt-2 sm:hidden animate-pulse"></div>
                <div className="h-5 bg-gray-200 rounded-full w-20 inline-block sm:hidden mt-2 animate-pulse"></div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap hidden sm:table-cell">
                <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap hidden md:table-cell">
                <div className="h-5 bg-gray-200 rounded-full w-20 animate-pulse"></div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                <div className="flex gap-4">
                  <div className="h-4 bg-gray-200 rounded w-10 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-12 animate-pulse"></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
