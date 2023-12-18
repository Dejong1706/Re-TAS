"use client";
import { FC } from "react";
import { useState } from "react";

interface ReserveModalProps {
  onReserve: (reservation: { date: string; content: string }) => void;
  onClose: () => void;
}

const ReserveModal: FC<ReserveModalProps> = ({ onReserve, onClose }) => {
  const [date, setDate] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleReserve = () => {
    // onReserve 함수에 상담 예약 정보 전달
    onReserve({ date, content });
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="bg-white w-96 p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">상담 예약</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            상담 일자:
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border rounded-md py-2 px-3 text-sm"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600">
            상담 내용:
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border rounded-md py-2 px-3 text-sm"
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleReserve}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
          >
            상담 예약
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReserveModal;
