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
                <h2 className="font-semibold text-xl text-gray-50 leading-tight">
                    Detalhes do Vendedor
                </h2>
            }
        >
            <Head title="Detalhes do Vendedor" />

            <div className="py-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-gray-200 shadow-lg sm:rounded-lg">
                    <div className="flex justify-end items-center m-4 text-gray-700">
                        <div className="flex space-x-1">
                            <Link href={route("sellers.index")}>
                                <InfoButton className="text-sm" />
                            </Link>
                            <Link
                                href={route("sellers.edit", {
                                    seller: seller.id,
                                })}
                            >
                                <WarningButton />
                            </Link>
                            <ConfirmDelete
                                id={seller.id}
                                routeName="sellers.destroy"
                            />
                        </div>
                    </div>

                    <AlertMessage message={flash} />

                    <div className="bg-gray-200 text-sm p-6 shadow-lg rounded-lg">
                        <div className="mb-6 divide-y divide-gray-100 pb-4">
                            <h1 className="text-lg font-semibold text-gray-700"> 
                                ID
                            </h1>
                            <p className="text-gray-700">
                                {seller.id}
                            </p>
                        </div>
                        <div className="mb-6 divide-y divide-gray-100 pb-4">
                            <h1 className="text-lg font-semibold text-gray-700">
                                Nome
                            </h1>
                            <p className="text-gray-700">
                                {seller.name}
                            </p>
                        </div>
                        <div className="mb-6 divide-y divide-gray-100 pb-4">
                            <h1 className="text-lg font-semibold text-gray-700">
                                E-mail
                            </h1>
                            <p className="text-gray-700">
                                {seller.email}
                            </p>
                        </div>
                        <div className="mb-6 divide-y divide-gray-100 pb-4">
                            <h1 className="text-lg font-semibold text-gray-700">
                                Telefone
                            </h1>
                            <p className="text-gray-700">
                                {seller.phone}
                            </p>
                        </div>
                        <div className="mb-6 divide-y divide-gray-100 pb-4">
                            <h1 className="text-lg font-semibold text-gray-700">
                                Quantidade de tickets
                            </h1>
                            <p className="text-gray-700">
                                {seller.amount_tickets}
                            </p>
                        </div>
                        <div className="mb-0 divide-y divide-gray-100">
                            <h1 className="text-lg font-semibold text-gray-700">
                                Status
                            </h1>
                            <p className="text-gray-700">
                                {seller.status}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
