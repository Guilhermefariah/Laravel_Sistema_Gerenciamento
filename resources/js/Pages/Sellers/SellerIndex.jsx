import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { AlertMessage } from "@/Components/Delete/AlertMessage/AlertMessage";
import CheckButton from "@/Components/Button/CheckButton";

export default function SellerIndex() {
    const { flash } = usePage().props;

    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        phone: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("sellers.store"));
    };

    return (
        <>
            <Head title="Login - Vendedor" />
            <div className="max-w-2xl mx-auto sm:px-6 lg:px-8 py-8">
                <h2 className="font-semibold text-xl text-gray-50 leading-tight">
                    Login do Vendedor
                </h2>
                <AlertMessage message={flash} />
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-gray-700">
                            Nome
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            className="w-full px-4 py-2 border rounded-md"
                            required
                        />
                        {errors.name && (
                            <span className="text-red-500 text-sm">
                                {errors.name}
                            </span>
                        )}
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            className="w-full px-4 py-2 border rounded-md"
                            required
                        />
                        {errors.name && (
                            <span className="text-red-500 text-sm">
                                {errors.email}
                            </span>
                        )}
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-gray-700">
                            Telefone
                        </label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={data.phone}
                            onChange={(e) => setData("phone", e.target.value)}
                            className="w-full px-4 py-2 border rounded-md"
                            required
                        />
                        {errors.name && (
                            <span className="text-red-500 text-sm">
                                {errors.phone}
                            </span>
                        )}
                    </div>

                    <div className="flex justify-between items-center">
                        <Link
                            href={route("sellers.create")}
                            className="text-blue-600 underline"
                        >
                            Criar uma conta
                        </Link>
                        <CheckButton type="submit" disabled={processing} >
                            Entrar
                        </CheckButton>
                    </div>
                </form>
                Maria maria@gmail.com 11999999999
            </div>
        </>
    );
}
