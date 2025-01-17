import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InfoButton from "@/Components/Button/InfoButton";
import PrimaryButton from "@/Components/Button/ViewButton";
import { Head, Link, useForm } from "@inertiajs/react";
import UpdateButton from "@/Components/Button/UpdateButton";
import ViewButton from "@/Components/Button/ViewButton";

export default function SellerEdit({ seller }) {
    const { data, setData, put, processing, errors } = useForm({
        name: seller.name || "",
        email: seller.email || "",
        phone: seller.phone || "",
        amount_tickets: seller.amount_tickets || "",
        status: seller.status || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        put(route("sellers.update", { seller: seller.id }));
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Vendedores
                </h2>
            }
        >
            <Head title="Edit Seller" />

            <div className="py-4 max-w-7xl max-auto sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white shadow-lg sm:rounded-lg dark:bg-gray-800">
                    <div className="flex justify-between items-center m-4 text-white">
                        <h3 className="text-lg">Editar vendedor</h3>
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

                    <div className="bg-gray50 text-sm dark:bg-gray-700 p-4 rounded-lg shadow-md">
                        <form onSubmit={handleSubmit} action="#">
                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-200"
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
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                                    className="block text-sm font-medium text-gray-200"
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
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                                    className="block text-sm font-medium text-gray-200"
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
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                                    className="block text-sm font-medium text-gray-200"
                                >
                                    Status
                                </label>
                                <select
                                    id="status"
                                    value={data.status}
                                    onChange={(e) =>
                                        setData("status", e.target.value)
                                    }
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                                    className="block text-sm font-medium text-gray-200"
                                >
                                    Quantidade de tickets
                                </label>
                                <input
                                    id="amount_tickets"
                                    type="number"
                                    placeholder="Amount Tickets"
                                    value={data.amount_tickets}
                                    onChange={(e) =>
                                        setData(
                                            "amount_tickets",
                                            e.target.value
                                        )
                                    }
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
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
            </div>
        </AuthenticatedLayout>
    );
}
