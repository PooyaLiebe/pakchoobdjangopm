/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Edit, Search, Send, Trash } from "lucide-react";
import api from "../api.js";
import { Tooltip } from "@mui/material";

const FormTable = () => {
  const [submitform, setSubmitform] = useState([]);

  useEffect(() => {
    getForm();
  }, []);

  const getForm = async () => {
    try {
      const res = await api.get("/api/submitform/");
      console.log("API Response:", res.data); // Check structure in console
      setSubmitform(res.data);
    } catch (err) {
      console.error("Error fetching data:", err);
      alert("Failed to fetch data. Check console for details.");
    }
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg p-6 border border-gray-700 mb-8 rounded"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">
          فرم های ثبت شده توسط درخواست دهنده
        </h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search Form..."
            className="bg-gray-700 placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Form Code
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Problem Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Production Stop
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Section
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Machine Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Machine Code
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Machine Place Code
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Stop Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Failure Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Shift
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Suggest Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Work Suggest
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Fix Repair
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Report Inspection
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Fault Dm
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Operator Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Problem Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {submitform.map((form) => (
              <motion.tr key={form.id}>
                <td className="px-6 py-4 text-gray-100">{form.formcode}</td>
                <td className="px-6 py-4 text-gray-300">{form.problemdate}</td>
                <td className="px-6 py-4 text-gray-300">
                  {form.productionstop || "N/A"}
                </td>
                <td className="px-6 py-4 text-gray-300">{form.section}</td>
                <td className="px-6 py-4 text-gray-300">
                  {form.machinename || "N/A"}
                </td>
                <td className="px-6 py-4 text-gray-300">
                  {form.machinecode || "N/A"}
                </td>
                <td className="px-6 py-4 text-gray-300">
                  {form.machineplacecode || "N/A"}
                </td>
                <td className="px-6 py-4 text-gray-300">
                  {form.stoptime || "N/A"}
                </td>
                <td className="px-6 py-4 text-gray-300">
                  {form.failuretime || "N/A"}
                </td>
                <td className="px-6 py-4 text-gray-300">
                  {form.shift || "N/A"}
                </td>
                <td className="px-6 py-4 text-gray-300">
                  {form.suggesttime || "N/A"}
                </td>
                <td className="px-6 py-4 text-gray-300">
                  {form.worksuggest || "N/A"}
                </td>
                <td className="px-6 py-4 text-gray-300">
                  {form.fixrepair || "N/A"}
                </td>
                <td className="px-6 py-4 text-gray-300">
                  {form.reportinspection || "N/A"}
                </td>
                <td className="px-6 py-4 text-gray-300">
                  {form.faultdm || "N/A"}
                </td>
                <td className="px-6 py-4 text-gray-300">
                  {form.operatorname || "N/A"}
                </td>
                <td className="px-6 py-4 text-gray-300">
                  {form.problemdescription || "N/A"}
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
  );
};

export default FormTable;
