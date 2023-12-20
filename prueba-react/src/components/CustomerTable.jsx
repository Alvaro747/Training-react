import React from "react";

const CustomerTable = (props) => {
  const {users} = props;

  return (
    <section className="container px-4 mx-auto">
      <h2 className="text-lg font-medium text-gray-800 dark:text-white">
        Usuarios
      </h2>

      <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
        Estos son los usuarios de la plataforma
      </p>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <span>Empresa</span>
                    </th>

                    <th
                      scope="col"
                      className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Nombre
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Correo electrónico
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Teléfono
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Ciudad
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        {user.company.name}
                      </td>
                      <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                        {user.name}
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        {user.email}
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        {user.phone}
                      </td>

                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        {user.address.city}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerTable;
