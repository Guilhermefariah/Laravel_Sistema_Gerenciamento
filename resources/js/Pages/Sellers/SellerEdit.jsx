import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InfoButton from "@/Components/Button/InfoButton";
import { Head, Link, useForm } from "@inertiajs/react";
import UpdateButton from "@/Components/Button/UpdateButton";
import ViewButton from "@/Components/Button/ViewButton";

export default function SellerEdit({ seller }) {
    const { data, setData, put, processing, errors } = useForm({
        id: seller.id || "",
        name: seller.name || "",
        email: seller.email || "",
        phone: seller.phone || "",
        status: seller.status || "",
        amount_tickets: seller.amount_tickets || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        put(route("sellers.update", { seller: data.id }));
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-50 leading-tight">
                    Editar Vendedor
                </h2>
            }
        >
            <Head title="Editar vendedor" />

            <div className="py-6 max-w-4xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-gray-200 shadow-md rounded-lg p-6">
                    <div className="flex justify-end items-center mb-6">
                        <div className="flex space-x-1">
                            <Link href={route("sellers.index")}>
                                <InfoButton className="text-sm" />
                            </Link>
                            <Link
                                href={route("sellers.show", {
                                    seller: seller.id,
                                })}
                            >
                                <ViewButton className="text-sm" />
                            </Link>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} action="#">
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-lg text-gray-700"
                            >
                                Nome
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Name"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                className="mt-1 block w-full rounded-md border-none shadow-sm focus:ring-blue-600 sm:text-sm text-gray-700"
                            />
                            {errors.name && (
                                <span className="text-red-500">
                                    {errors.name}
                                </span>
                            )}
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-lg text-gray-700"
                            >
                                E-mail
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Email"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                className="mt-1 block w-full rounded-md border-none shadow-sm focus:ring-blue-600 sm:text-sm text-gray-700"
                            />
                            {errors.email && (
                                <span className="text-red-500">
                                    {errors.email}
                                </span>
                            )}
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="phone"
                                className="block text-lg text-gray-700"
                            >
                                Telefone
                            </label>
                            <input
                                id="phone"
                                type="text"
                                placeholder="Phone"
                                value={data.phone}
                                onChange={(e) =>
                                    setData("phone", e.target.value)
                                }
                                className="mt-1 block w-full rounded-md border-none shadow-sm focus:ring-blue-600 sm:text-sm text-gray-700"
                            />
                            {errors.phone && (
                                <span className="text-red-500">
                                    {errors.phone}
                                </span>
                            )}
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="status"
                                className="block text-lg text-gray-700"
                            >
                                Status
                            </label>
                            <select
                                id="status"
                                value={data.status}
                                onChange={(e) =>
                                    setData("status", e.target.value)
                                }
                                className="mt-1 block w-full rounded-md border-none shadow-sm focus:ring-blue-600 sm:text-sm text-lg text-gray-700"
                            >
                                <option value="Ativo">Ativado</option>
                                <option value="Inativo">Inativo</option>
                            </select>
                            {errors.status && (
                                <span className="text-red-500">
                                    {errors.status}
                                </span>
                            )}
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="amount_tickets"
                                className="block text-lg text-gray-700"
                            >
                                Quantidade de tickets
                            </label>
                            <select
                                id="amount_tickets"
                                value={data.amount_tickets}
                                onChange={(e) =>
                                    setData("amount_tickets", e.target.value)
                                }
                                className="mt-1 block w-full rounded-md border-none shadow-sm focus:ring-blue-600 sm:text-sm text-lg text-gray-700"
                            >
                                <option value="Em Aberto">Em aberto</option>
                                <option value="Em Andamento">
                                    Em andamento
                                </option>
                                <option value="Resolvido">Resolvido</option>
                            </select>
                            {errors.amount_tickets && (
                                <span className="text-red-500">
                                    {errors.amount_tickets}
                                </span>
                            )}
                        </div>

                        <div className="flex justify-end">
                            <UpdateButton
                                type="submit"
                                disabled={processing}
                                className="text-sm"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
