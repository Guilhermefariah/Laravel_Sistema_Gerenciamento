import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InfoButton from "@/Components/Button/InfoButton";
import { Head, Link, useForm } from "@inertiajs/react";
import CheckButton from "@/Components/Button/CheckButton";

export default function SellerCreate() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        phone: "",
        amount_tickets: "",
        status: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("sellers.store"));
    };

    return (
        <AuthenticatedLayout>
            <Head title="Create Seller" />

            <div className="py-6 max-w-4xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                            Novo Vendedor
                        </h3>
                        <Link href={route("sellers.index")}>
                            <InfoButton className="text-sm" />
                        </Link>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                Nome
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Nome do vendedor"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                            />
                            {errors.name && (
                                <span className="text-red-500 text-sm">
                                    {errors.name}
                                </span>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                            >
                                E-Mail
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="E-mail do vendedor"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                            />
                            {errors.email && (
                                <span className="text-red-500 text-sm">
                                    {errors.email}
                                </span>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="phone"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                            >
                                Telefone
                            </label>
                            <input
                                id="phone"
                                type="text"
                                placeholder="Telefone do vendedor"
                                value={data.phone}
                                onChange={(e) =>
                                    setData("phone", e.target.value)
                                }
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                            />
                            {errors.phone && (
                                <span className="text-red-500 text-sm">
                                    {errors.phone}
                                </span>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="amount_tickets"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                            >
                                Quantidade de Tickets
                            </label>
                            <input
                                id="amount_tickets"
                                type="number"
                                placeholder="Quantidade de tickets"
                                value={data.amount_tickets}
                                onChange={(e) =>
                                    setData("amount_tickets", e.target.value)
                                }
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                            />
                            {errors.amount_tickets && (
                                <span className="text-red-500 text-sm">
                                    {errors.amount_tickets}
                                </span>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="status"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
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
                                <option value="">Selecione</option>
                                <option value="Ativo">Ativo</option>
                                <option value="Inativo">Inativo</option>
                            </select>
                            {errors.status && (
                                <span className="text-red-500 text-sm">
                                    {errors.status}
                                </span>
                            )}
                        </div>

                        <div className="flex justify-end">
                            <CheckButton type="submit" disabled={processing} />

                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
