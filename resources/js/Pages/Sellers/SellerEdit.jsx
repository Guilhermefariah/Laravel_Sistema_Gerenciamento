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
        amount_tickets: seller.amount_tickets || "",
        status: seller.status || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        put(route("sellers.update", { seller: data.id }));
    };

    return (
        <AuthenticatedLayout>
            <Head title="Editar vendedor" />

            <div className="py-6 max-w-4xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                            Editar Cadastro
                        </h3>
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
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
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
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
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
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
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
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
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
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
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
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
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
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                Status
                            </label>
                            <select
                                id="status"
                                value={data.status}
                                onChange={(e) =>
                                    setData("status", e.target.value)
                                }
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                            >
                                <option value="">Selecionar status</option>
                                <option value="active">Ativado</option>
                                <option value="inactive">Inactive</option>
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
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                Quantidade de tickets
                            </label>
                            <select
                                id="amount_tickets"
                                value={data.amount_tickets}
                                onChange={(e) =>
                                    setData("amount_tickets", e.target.value)
                                }
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                            >
                                <option value="">Quantidade de tickets</option>
                                <option value="Em aberto">Em aberto</option>
                                <option value="Em andamento">
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
