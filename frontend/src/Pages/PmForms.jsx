/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "../Components/Common/Header";
import { Edit, Search, Send, Trash } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Tooltip } from "@mui/material";
const categoryData = [
  {
    id: 1,
    section: "Sanding",
    machinename: "Push Feeder",
    equipmentname: "Pusher",
    operatorname: "Pooya Payvar",
    technician: "Mechanic",
  },
];

const PmForms = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredForms, setFilteredForms] = useState(categoryData);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = categoryData.filter(
      (form) =>
        form.section.toLowerCase().includes(term) ||
        form.machinename.toLowerCase().includes(term)
    );
    setFilteredForms(filtered);
  };
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title={"Pm Forms"} />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-100">Form list</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Search Form..."
                className="bg-gray-700 placeholder-gray-400 rounded-lg mt-2 pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={handleSearch}
              />
              <Search
                className="absolute left-3 top-5 text-gray-400 "
                size={18}
              />
            </div>
          </div>
          <div className="overflow-x-auto bg-gray-700 rounded">
            <table className="min-w-full divide-y divide-gray-700">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Section
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Machine Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Equipment Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Operator Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Technician
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {filteredForms.map((form) => (
                  <motion.tr
                    key={form.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center">
                      {form.section}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {form.machinename}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {form.equipmentname}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {form.operatorname}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {form.technician}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      <Tooltip title={"Edit"} placement="top">
                        {" "}
                        <button className="text-indigo-400 hover:text-indigo-300 mr-2 cursor-pointer">
                          <Edit size={18} />
                        </button>
                      </Tooltip>
                      <Tooltip title={"Delete"} placement="top">
                        <button className="text-red-400 hover:text-red-300 mr-2 cursor-pointer">
                          <Trash size={18} />
                        </button>
                      </Tooltip>
                      <Tooltip title={"Send"} placement="top">
                        <button className="text-pink-500 hover:text-pink-300 cursor-pointer">
                          <Send size={18} />
                        </button>
                      </Tooltip>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default PmForms;
