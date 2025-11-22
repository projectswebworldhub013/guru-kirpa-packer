export default function Modal({ title, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white text-gray-900 rounded-lg shadow-xl w-full max-w-xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-red-600">{title}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-red-600">
            ✕
          </button>
        </div>
        <div className="text-gray-700">
          <p>
            <strong>{title}</strong> is one of our specialized offerings under the Gurukirpa Relocation umbrella. We ensure that all sub-services are executed with precision, care, and attention to detail—whether it's local shifting, corporate moves, or logistics support. For more info or to book, contact us today.
          </p>
        </div>
        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
