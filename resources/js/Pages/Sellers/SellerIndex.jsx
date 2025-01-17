import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PrimaryButton from "@/Components/Button/ViewButton";
import SuccessButton from "@/Components/Button/SuccessButton";
import WarningButton from "@/Components/Button/WarningButton";
import { AlertMessage } from "@/Components/Delete/AlertMessage/AlertMessage";
import { ConfirmDelete } from "@/Components/Delete/ConfirmDelete";
import { Pagination } from "@/Components/Pagination/Pagination";
import { Head, Link, usePage } from "@inertiajs/react";
import TableHeadSeller from "@/Components/Table/TableSeller/TableHeadSeller";

export default function SellerIndex({ sellers }) {
    const { flash } = usePage().props;

    return (
        <AuthenticatedLayout>
            <Head title="vendedores" />

            <div className="py-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white shadow-lg sm:rounded-lg dark:bg-gray-800">
                    <div className="flex justify-between items-center m-4 text-white">
                        <h3 className="text-lg">Tabela de Vendedores</h3>
                        <div className="flex space-x-4">
                            <Link href={route("sellers.create")}>
                                <SuccessButton className="text-sm" />
                            </Link>
                        </div>
                    </div>

                    <AlertMessage message={flash} />

                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <TableHeadSeller />

                        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                            {sellers.data.map((seller) => (
                                <tr key={seller.id} className="hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300">
                                    <td className="px-6 py-2 text-sm text-gray-200 tracking-wider">
                                        {seller.id}
                                    </td>
                                    <td className="px-6 py-2 text-sm text-gray-200 tracking-wider">
                                        {seller.name}
                                    </td>
                                    <td className="px-6 py-2 text-sm text-gray-200 tracking-wider">
                                        {seller.email}
                                    </td>
                                    <td className="px-6 py-2 text-sm text-gray-200 tracking-wider">
                                        {seller.phone}
                                    </td>
                                    <td className="px-6 py-2 text-sm text-gray-200 tracking-wider">
                                        {seller.amount_tickets}
                                    </td>
                                    <td className="px-6 py-2 text-sm text-gray-200 tracking-wider">
                                        {seller.status}
                                    </td>
                                    <td className="px-6 py-2 text-sm text-center text-gray-200 tracking-wider">
                                        <Link
                                            href={route("sellers.show", {
                                                id: seller.id,
                                            })}
                                        >
                                            <PrimaryButton className="ms-1" />
                                        </Link>
                                        <Link
                                            href={route("sellers.edit", {
                                                id: seller.id,
                                            })}
                                        >
                                            <WarningButton className="mt-1" />
                                        </Link>
                                        <ConfirmDelete
                                            routeName="sellers.destroy"
                                            id={seller.id}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Pagination
                        links={sellers.links}
                        currentPage={sellers.current_page}
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
