import React from "react";

/**
 * columns: array of { label: string, accessor: string, render?: function }
 * data: array of object
 */
const Table = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto rounded-2xl shadow border border-gray-200 bg-white">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.accessor}
                className="px-5 py-3 text-sm font-bold text-gray-700 bg-gray-50 border-b border-gray-200 text-center uppercase tracking-wider">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((row, idx) => (
              <tr
                key={row.id || idx}
                className={
                  idx % 2 === 0
                    ? "bg-white hover:bg-green-50 transition"
                    : "bg-gray-50 hover:bg-green-50 transition"
                }>
                {columns.map((col) => (
                  <td
                    key={col.accessor}
                    className="px-5 py-3 text-sm text-gray-800 border-b border-gray-100 text-center align-middle">
                    {col.render
                      ? col.render(row[col.accessor], row, idx)
                      : row[col.accessor]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="py-8 text-center text-gray-400 italic bg-white rounded-b-2xl">
                Tidak ada data.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
