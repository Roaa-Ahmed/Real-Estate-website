import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Plus } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Booking = () => {
  const [selectedTime, setSelectedTime] = useState('10:00 AM');
  const [selectedDate, setSelectedDate] = useState(23);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '+20 10021064452',
    message: ''
  });

  const timeSlots = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 AM',
    '1:00 AM',
    '2:00 AM'
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (!formData.fullName || !formData.email) {
      toast.error('🚨 Please fill in all required fields!', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        style: {
          background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)',
          borderRadius: '16px',
          fontWeight: '600',
          fontSize: '14px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)'
        }
      });
      return;
    }

    toast.success(`🎉 Booking confirmed for August ${selectedDate}, 2020 at ${selectedTime}! We'll see you soon.`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      style: {
        background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        borderRadius: '16px',
        fontWeight: '600',
        fontSize: '14px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)'
      }
    });
    
    console.log('Booking submitted:', { ...formData, selectedTime, selectedDate });
  };

  const handleAddToCalendar = () => {
    toast.info(`📅 Event added to calendar: August ${selectedDate}, 2020 at ${selectedTime}`, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      style: {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '16px',
        fontWeight: '600',
        fontSize: '14px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)'
      }
    });
  };

  // Generate calendar days for August 2020
  const generateCalendarDays = () => {
    const days = [];
    const daysInMonth = 31;
    const startDay = 6; // Saturday (August 1st, 2020 was a Saturday)
    
    // Add empty cells for days before the 1st
    for (let i = 0; i < startDay; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const calendarDays = generateCalendarDays();
  const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-xl p-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section - Booking Form */}
          <div className="lg:col-span-2">
            {/* Time Slot Selection */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Select a Time Slot</h2>
              <div className="grid grid-cols-3 gap-4">
                {timeSlots.map((time) => (
                  <motion.button
                    key={time}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedTime(time)}
                    className={`py-3 px-4 rounded-lg border-2 transition-all duration-200 font-medium ${
                      selectedTime === time
                        ? 'bg-blue-600 text-white border-blue-600 shadow-lg'
                        : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                    }`}
                  >
                    {time}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Form Section */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Your Information</h3>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your email"
                    />
                  </motion.div>
                </div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="+20 10021064452"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Any special requests or questions?"
                  />
                </motion.div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <motion.button
                    type="button"
                    onClick={handleSubmit}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow-lg"
                  >
                    Confirm Booking
                  </motion.button>
                  
                  <motion.button
                    type="button"
                    onClick={handleAddToCalendar}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <Plus size={16} />
                    Add to Calendar
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Section - Calendar */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="bg-gray-50 rounded-xl p-6 sticky top-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-900">August</h4>
                <span className="text-sm text-gray-600">2020</span>
              </div>
              
              <div className="grid grid-cols-7 gap-1 mb-2">
                {weekDays.map((day) => (
                  <div key={day} className="text-center text-xs font-medium text-gray-500 py-2">
                    {day}
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-1">
                {calendarDays.map((day, index) => (
                  <motion.button
                    key={index}
                    whileHover={day ? { scale: 1.1 } : {}}
                    whileTap={day ? { scale: 0.9 } : {}}
                    onClick={() => day && setSelectedDate(day)}
                    className={`
                      aspect-square rounded-full text-sm font-medium transition-all duration-200
                      ${!day ? 'invisible' : 
                        selectedDate === day ? 'bg-blue-600 text-white shadow-lg' :
                        'text-gray-700 hover:bg-blue-100'
                      }
                    `}
                    disabled={!day}
                  >
                    {day}
                  </motion.button>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 p-4 bg-white rounded-lg border border-gray-200"
              >
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar size={16} />
                  <span>Selected: August {selectedDate}, 2020 at {selectedTime}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Toast Container with Ultra Modern Styling */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        toastStyle={{
          fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif',
          fontSize: '14px',
          fontWeight: '600',
          borderRadius: '16px',
          padding: '16px 20px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 16px rgba(0, 0, 0, 0.08)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
        progressStyle={{
          background: 'rgba(255, 255, 255, 0.9)',
          height: '3px',
          borderRadius: '0 0 16px 16px'
        }}
        closeButtonStyle={{
          color: 'rgba(255, 255, 255, 0.8)',
          fontSize: '18px',
          fontWeight: 'bold'
        }}
        bodyStyle={{
          margin: 0,
          padding: 0
        }}
        toastClassName="modern-toast"
        style={{
          width: '420px'
        }}
      />
    </div>
  );
};

export default Booking;