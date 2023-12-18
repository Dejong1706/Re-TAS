"use client";
import { useState } from "react";
// 새로운 ReserveModal 컴포넌트 추가
import ReserveModal from "../ReserveModal/page";
import { FC } from "react";

interface Consultation {
  date: string;
  content: string;
}

const UserPage: FC = () => {
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [showReserveModal, setShowReserveModal] = useState<boolean>(false);

  const handleReserveClick = (): void => {
    setShowReserveModal(true);
  };

  const closeModal = (): void => {
    setShowReserveModal(false);
  };

  const handleReserve = ({ date, content }: Consultation): void => {
    setConsultations((prevConsultations) => [
      ...prevConsultations,
      { date, content },
    ]);
    setShowReserveModal(false);
  };

  return (
    <div className="container mx-auto p-8 bg-white w-full h-screen inline-flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-6">상담 예약 기록</h1>
      {consultations.length === 0 ? (
        <p className="text-gray-600">상담 예약 기록이 없습니다.</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {consultations.map((consultation, index) => (
            <li
              key={index}
              className="bg-white p-6 rounded-md shadow-md transition-transform hover:scale-105"
            >
              <p className="text-lg font-bold">{`상담 일자: ${consultation.date}`}</p>
              <p className="mt-2">{`상담 내용: ${consultation.content}`}</p>
            </li>
          ))}
        </ul>
      )}

      {showReserveModal && (
        <ReserveModal onReserve={handleReserve} onClose={closeModal} />
      )}

      <button
        onClick={handleReserveClick}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-6"
      >
        상담 예약하기
      </button>
    </div>
  );
};

export default UserPage;
