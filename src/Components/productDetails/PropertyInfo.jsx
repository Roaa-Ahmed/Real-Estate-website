import RoomInfo from "./RoomInfo";

const PropertyInfo = () => {
  return (
    <div className="bg-white w-full md:w-[650px] rounded-[20px] border border-[#6B728033] p-4 sm:p-6 shadow-sm">
      {/* السعر وحالة البيع */}
      <div className="flex flex-row items-center justify-between gap-0 mb-6">
        <h1 className="font-poppins text-[#111827] font-semibold text-3xl sm:text-4xl leading-normal">
          $320,000
        </h1>
        <span className="text-[#6B7280] text-base sm:text-lg font-medium bg-gray-100 px-3 py-1 rounded-full">
          For Sale
        </span>
      </div>

      {/* اسم العقار */}
      <div className="mb-6">
        <h2 className="font-medium text-xl sm:text-2xl text-gray-900 leading-normal">
          Charming Townhouse
        </h2>
      </div>

      {/* العنوان */}
      <div className="flex items-center gap-3 mb-8">
        <svg
          width="18"
          height="22"
          viewBox="0 0 21 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0"
        >
          <path
            d="M11.7961 24.375C14.6016 21.2402 21 13.6426 21 9.375C21 4.19922 16.2969 0 10.5 0C4.70312 0 0 4.19922 0 9.375C0 13.6426 6.39844 21.2402 9.20391 24.375C9.87656 25.1221 11.1234 25.1221 11.7961 24.375ZM10.5 6.25C11.4283 6.25 12.3185 6.57924 12.9749 7.16529C13.6313 7.75134 14 8.5462 14 9.375C14 10.2038 13.6313 10.9987 12.9749 11.5847C12.3185 12.1708 11.4283 12.5 10.5 12.5C9.57174 12.5 8.6815 12.1708 8.02513 11.5847C7.36875 10.9987 7 10.2038 7 9.375C7 8.5462 7.36875 7.75134 8.02513 7.16529C8.6815 6.57924 9.57174 6.25 10.5 6.25Z"
            fill="#4B5563"
          />
        </svg>
        <p className="font-normal text-base sm:text-lg md:text-xl text-[#4B5563] leading-normal">
          123 Main St, Anytown, USA
        </p>
      </div>

      {/* معلومات الغرف */}
      <RoomInfo />
    </div>
  );
};

export default PropertyInfo;
