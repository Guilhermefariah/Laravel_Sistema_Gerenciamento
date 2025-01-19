import React from "react";
import { FaRegIdCard } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { LuTicketsPlane } from "react-icons/lu";
import { IoMdNotifications } from "react-icons/io";
import { FiSettings } from "react-icons/fi";

export default function TableHeadSeller() {
    return (
        <thead className="bg-gray-100 max-w-2 cursor-pointer">
            <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-blue-600 hover:text-yellow-400 tracking-wider hover:bg-gray-50 hover:rounded-lg">
                    <FaRegIdCard className="size-6" />
                </th>
                <th className="px-10 py-3 text-left text-sm font-medium text-blue-600 hover:text-yellow-400 tracking-wider hover:bg-gray-50 hover:rounded-lg">
                    <IoPersonSharp className="size-6" />
                </th>
                <th className="px-20 py-3 text-left text-sm font-medium text-blue-600 hover:text-yellow-400 tracking-wider hover:bg-gray-50 hover:rounded-lg">
                    <MdEmail className="size-6" />
                </th>
                <th className="px-14 py-3 text-left text-sm font-medium text-blue-600 hover:text-yellow-400 tracking-wider hover:bg-gray-50 hover:rounded-lg">
                    <FaPhoneVolume className="size-6" />
                </th>
                <th className="px-10 py-3 text-left text-sm font-medium text-blue-600 hover:text-yellow-400 tracking-wider hover:bg-gray-50 hover:rounded-lg">
                    <LuTicketsPlane className="size-6" />
                </th>
                <th className="px-8 py-3 text-left text-sm font-medium text-blue-600 hover:text-yellow-400 tracking-wider hover:bg-gray-50 hover:rounded-lg">
                    <IoMdNotifications className="size-6" />
                </th>
                <th className="flex px-6 py-3 text-center justify-center text-sm font-medium text-blue-600 hover:text-yellow-400 tracking-wider hover:bg-gray-50 rounded-lg">
                    <FiSettings  className="size-6"/>
                </th>
            </tr>
        </thead>
    );
}
