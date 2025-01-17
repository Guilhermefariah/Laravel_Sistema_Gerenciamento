import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PrimaryButton from "@/Components/Button/ViewButton";
import SuccessButton from "@/Components/Button/SuccessButton";
import WarningButton from "@/Components/Button/WarningButton";
import { AlertMessage } from "@/Components/Delete/AlertMessage/AlertMessage";
import { ConfirmDelete } from "@/Components/Delete/ConfirmDelete";
import { Pagination } from "@/Components/Pagination/Pagination";
import { Head, Link, usePage } from "@inertiajs/react";

export default function SellerIndex({ sellers }) {
    const { flash } = usePage().props;

    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Vendedores
                </h2>
            }
        >
            <Head title="sellers" />
            <div className="py-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white shadow-lg sm:rounded-lg dark:bg-gray-800">
                    <div className="flex justify-between items-center m-4 text-white">
                        <h3 className="text-lg">Lista de Vendedores</h3>
                        <div className="flex space-x-4">
                            <Link href={route("sellers.create")}>
                                <SuccessButton className="text-sm" />
                            </Link>
                        </div>
                    </div>

                    <AlertMessage message={flash} />

                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-200 tracking-wider">
                                    ID
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-200 tracking-wider">
                                    Nome
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-200 tracking-wider">
                                    E-Mail
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-200 tracking-wider">
                                    Telefone
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-200 tracking-wider">
                                    Tickets
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-200 tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-center text-sm font-medium text-gray-200 tracking-wider">
                                    Ações
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                            {sellers.data.map((seller) => (
                                <tr key={seller.id}>
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
                                    <td className="px-6 py-2 text-sm text-gray-200 tracking-wider text-center">
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
                                            resourceId={seller.id}
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
