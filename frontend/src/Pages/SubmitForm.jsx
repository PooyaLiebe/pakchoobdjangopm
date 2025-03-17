/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "../Components/Common/Header";
import "../Styles/SubmitForm.css";
import { AnimatePresence, motion } from "framer-motion";
import api from "../api.js";

const SubmitForm = () => {
  const [values, setValues] = useState({
    formcode: "",
    problemdate: "",
    productionstop: "خیر",
    section: "Chipper",
    machinename: "",
    machinecode: "",
    machineplacecode: "",
    stoptime: "",
    failuretime: "",
    shift: "A",
    suggesttime: "فوری",
    worksuggest: "اضطراری",
    fixrepair: "درخواست اپراتور",
    reportinspection: "بازرسی فنی",
    faultdm: "اختلال در کارکرد",
    operatorname: "",
    problemdescription: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const createSubmitForm = async (e) => {
    e.preventDefault();

    // Format problemdate and stoptime to ISO format if necessary
    const formattedValues = {
      ...values,
      problemdate: new Date(values.problemdate).toISOString().slice(0, 19), // Remove milliseconds for consistency
      stoptime: new Date(values.stoptime).toISOString().slice(0, 19),
      failuretime: values.failuretime + ":00", // Ensure time format is HH:MM:SS
      suggesttime: values.suggesttime + ":00", // Ensure time format is HH:MM:SS
    };

    console.log("Submitting form with values:", formattedValues); // Log the data to check

    try {
      const res = await api.post("/api/submitform/", formattedValues);
      console.log("Response:", res);

      if (res.status === 200 || res.status === 201) {
        alert("Form Submitted Successfully!");
      } else {
        alert(`Failed to submit form: ${res.status} ${res.statusText}`);
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="flex-1 overflow-auto relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <Header title="Submit Form" />
        <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
          <div className="body dark:bg-secondary-dark-bg rounded-3xl">
            <div className="container bg-gray-800">
              <header className="text-white">ثبت فرم</header>
              <form onSubmit={createSubmitForm}>
                <div className="form first">
                  <div className="details personal">
                    <div className="fields">
                      {[
                        {
                          label: "شماره درخواست",
                          name: "formcode",
                          type: "text",
                        },
                        {
                          label: "تاریخ بروز مشکل",
                          name: "problemdate",
                          type: "datetime-local",
                        },
                        {
                          label: "نام دستگاه",
                          name: "machinename",
                          type: "text",
                        },
                        {
                          label: "کد دستگاه",
                          name: "machinecode",
                          type: "text",
                        },
                        {
                          label: "کد محل استقرار دستگاه",
                          name: "machineplacecode",
                          type: "text",
                        },
                        {
                          label: "ساعت شروع توقف",
                          name: "stoptime",
                          type: "datetime-local",
                        },
                        {
                          label: "میزان ساعت کار تجهیز در زمان بروز عیب",
                          name: "failuretime",
                          type: "time",
                        },
                        {
                          label: "نام اپراتور",
                          name: "operatorname",
                          type: "text",
                        },
                      ].map((field) => (
                        <div className="input-field" key={field.name}>
                          <label
                            htmlFor={field.name}
                            className="flex justify-center text-center"
                          >
                            {field.label}
                          </label>
                          <input
                            type={field.type}
                            id={field.name}
                            name={field.name}
                            value={values[field.name]}
                            onChange={handleChange}
                            placeholder={field.label}
                            className="text-center"
                          />
                        </div>
                      ))}

                      {[
                        {
                          label: "مشکل باعث توقف خط شده است؟",
                          name: "productionstop",
                          options: ["خیر", "بله"],
                        },
                        {
                          label: "بخش",
                          name: "section",
                          options: [
                            "Chipper",
                            "Conveyor Line",
                            "Dryer & Air Grader",
                            "Refiner",
                            "Before Press",
                            "Press",
                            "After Press",
                            "Sanding",
                            "Cooling System",
                            "Steam Boiler",
                            "General",
                          ],
                        },
                        {
                          label: "شیفت",
                          name: "shift",
                          options: ["A", "B", "C"],
                        },
                        {
                          label: "زمان پیشنهادی برای شروع تعمیر",
                          name: "suggesttime",
                          options: [
                            "فوری",
                            "ساعات آتی",
                            "اولین روز کاری",
                            "در اولین فرصت",
                          ],
                        },
                        {
                          label: "نوع کار درخواستی",
                          name: "worksuggest",
                          options: [
                            "اضطراری",
                            "بهسازی",
                            "پایش وضعیت(غیر برنامه ای)",
                            "آماده سازی برای تعمیر",
                            "خدمات عمومی",
                          ],
                        },
                        {
                          label: "تعمیر و تعویض اصلاحی ناشی از",
                          name: "fixrepair",
                          options: [
                            "درخواست اپراتور",
                            "درخواست واحد نت",
                            "گزارش واحد ایمنی",
                            "آماده سازی برای تعمیر",
                            "خدمات عمومی",
                          ],
                        },
                        {
                          label: "گزارش بازرسی",
                          name: "reportinspection",
                          options: ["بازرسی فنی", "واحد نت", "اپراتور", "سایر"],
                        },
                        {
                          label: "روش کشف عیب",
                          name: "faultdm",
                          options: [
                            "اختلال در کارکرد",
                            "تعمیرات دوره ای",
                            "مشاهده تصادفی",
                            "بازرسی دوره ای",
                            "تست عملکرد",
                            "پایش وضعیت دوره ای",
                            "آماده به کار نبودن در حین نیاز",
                            "در حین انجام تعیرات اصلاحی",
                            "فالت با آلارم",
                            "سایر روش ها",
                          ],
                        },
                      ].map((field) => (
                        <div className="input-field" key={field.name}>
                          <label
                            htmlFor={field.name}
                            className="flex justify-center items-center"
                          >
                            {field.label}
                          </label>
                          <select
                            id={field.name}
                            name={field.name}
                            value={values[field.name]}
                            onChange={handleChange}
                            className="text-center"
                          >
                            {field.options.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        </div>
                      ))}

                      <div className="input-field">
                        <label
                          htmlFor="problemdescription"
                          className="flex justify-center items-center"
                        >
                          کلیات شرح عیب مشاهده شده
                        </label>
                        <textarea
                          id="problemdescription"
                          name="problemdescription"
                          value={values.problemdescription}
                          onChange={handleChange}
                          className="text-center"
                          placeholder="کلیات شرح مشاهده شده"
                        />
                      </div>
                    </div>

                    <button type="submit" className="nextBtn">
                      ثبت
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </main>
      </motion.div>
    </AnimatePresence>
  );
};

export default SubmitForm;
