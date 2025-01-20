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
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-50 leading-tight">
                    Vendedores
                </h2>
            }
        >
            <Head title="vendedores" />

            <div className="py-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-gray-100 shadow-lg sm:rounded-lg">
                    <div className="flex justify-end items-center m-4 text-gray-700">
                        <Link href={route("sellers.create")}>
                            <SuccessButton className="text-sm" />
                        </Link>
                    </div>
                    <AlertMessage message={flash} />

                    <div className="relative overflow-x-auto sm:rounded-lg">
                        <table className="min-w-full divide-y divide-blue-200">
                            <TableHeadSeller />

                            <tbody className="bg-gray-100 divide-y divide-gray-100 cursor-pointer">
                                {sellers.data.map((seller) => (
                                    <tr
                                        key={seller.id}
                                        className="hover:bg-gradient-to-t from-gray-100 to-gray-200 transition duration-300"
                                    >
                                        <td className="px-6 py-2 text-sm text-gray-800 hover:text-blue-600 tracking-wider">
                                            {seller.id}
                                        </td>
                                        <td className="px-6 py-2 text-sm text-gray-800 hover:text-blue-600 tracking-wider">
                                            {seller.name}
                                        </td>
                                        <td className="px-6 py-2 text-sm text-gray-800 hover:text-blue-600 tracking-wider">
                                            {seller.email}
                                        </td>
                                        <td className="px-6 py-2 text-sm text-gray-800 hover:text-blue-600 tracking-wider">
                                            {seller.phone}
                                        </td>
                                        <td className="px-6 py-2 text-sm text-gray-800 hover:text-blue-600 tracking-wider">
                                            {seller.amount_tickets}
                                        </td>
                                        <td className="px-6 py-2 text-sm text-gray-800 hover:text-blue-600 tracking-wider">
                                            {seller.status}
                                        </td>
                                        <td className="px-6 py-2 text-sm text-center text-gray-800 hover:text-blue-600 tracking-wider">
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
                                                <WarningButton className="ms-1" />
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
                    </div>
                    <Pagination
                        links={sellers.links}
                        currentPage={sellers.current_page}
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
