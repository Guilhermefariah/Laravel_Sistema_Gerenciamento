import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InfoButton from "@/Components/Button/InfoButton";
import WarningButton from "@/Components/Button/WarningButton";
import { AlertMessage } from "@/Components/Delete/AlertMessage/AlertMessage";
import { ConfirmDelete } from "@/Components/Delete/ConfirmDelete";
import { Head, Link, usePage } from "@inertiajs/react";

export default function SellerShow({ seller }) {
    const { flash } = usePage().props;

    return (
        <AuthenticatedLayout
        header={
            <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                Vendedores
            </h2>
        }
>
            <Head title={`Vendedores - ${seller.name}`} />

            <div className="py-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white shadow-lg sm:rounded-lg dark:bg-gray-800">
                    <div className="flex justify-between items-center m-4 text-white">
                        <h3 className="text-lg">Detalhes do vendedor</h3>
                        <div className="flex space-x-1">
                            <Link href={route("sellers.index")}>
                                <InfoButton className="text-sm">Lista de vendedores</InfoButton>
                            </Link>
                            <Link href={route("sellers.edit", { seller: seller.id })}>
                                <WarningButton className="text-sm">Editar</WarningButton>
                            </Link>
                            <ConfirmDelete id={seller.id} routeName="sellers.destroy" />
                        </div>
                    </div>

                    <AlertMessage message={flash} />

                    <div className="bg-white text-sm dark:bg-gray-800 p-4 shadow-md">
                        <div className="mb-4">
                            <p className="text-md font-semibold text-gray-400 dark:text-gray-200">ID</p>
                            <p className="text-gray-600 dark:text-gray-400">{seller.id}</p>
                        </div>
                        <div className="mb-4">
                            <p className="text-md font-semibold text-gray-400 dark:text-gray-200">Nome</p>
                            <p className="text-gray-600 dark:text-gray-400">{seller.name}</p>
                        </div>
                        <div className="mb-4">
                            <p className="text-md font-semibold text-gray-400 dark:text-gray-200">E-mail</p>
                            <p className="text-gray-600 dark:text-gray-400">{seller.email}</p>
                        </div>
                        <div className="mb-4">
                            <p className="text-md font-semibold text-gray-400 dark:text-gray-200">Telefone</p>
                            <p className="text-gray-600 dark:text-gray-400">{seller.phone}</p>
                        </div>
                        <div className="mb-4">
                            <p className="text-md font-semibold text-gray-400 dark:text-gray-200">Quantidade de tickets</p>
                            <p className="text-gray-600 dark:text-gray-400">{seller.amount_tickets}</p>
                        </div>
                        <div className="mb-4">
                            <p className="text-md font-semibold text-gray-400 dark:text-gray-200">Status</p>
                            <p className="text-gray-600 dark:text-gray-400">{seller.status}</p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
