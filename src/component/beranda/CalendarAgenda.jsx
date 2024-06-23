import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarAgenda.css'; // File CSS tambahan untuk custom styling

const CalendarAgenda = () => {
  const [date, setDate] = useState(new Date());
  const agendas = [
    { date: '2024-06-13', event: 'Evaluasi Tahunan TV Nasional' },
    { date: '2024-06-19', event: 'Survei Kepuasan terhadap Penyiaran Radio' },
    { date: '2024-06-28', event: 'Sosialiasi Penyiaran Berkaitan Pilkada Serentak' },
    { date: '2024-07-02', event: 'Monitoring dan Evaluasi Rutin' },
  ];

  const formatDate = (date) => {
    const d = new Date(date);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  };

  const filteredAgendas = agendas.filter(agenda => formatDate(date) === agenda.date);

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const formattedDate = formatDate(date);
      const hasAgenda = agendas.some(agenda => agenda.date === formattedDate);
      if (hasAgenda) {
        return (
          <div className="agenda-dot"></div>
        );
      }
    }
    return null;
  };

  return (
    <div data-aos="fade-left" className="mx-auto mt-16 mb-20 flex sm:flex-row flex-col sm:space-x-11">
      <div className="sm:w-1/2 w-full">
        <Calendar
          onChange={setDate}
          value={date}
          className="rounded-lg shadow-lg"
          tileContent={tileContent}
        />
      </div>
      <div className="sm:w-1/2 w-full sm:p-4 pt-4">
        <h1 className="md:text-3xl text-2xl text-[#420101] font-bold mb-5">
          Agenda
        </h1>
        {filteredAgendas.length > 0 ? (
          filteredAgendas.map((agenda, index) => (
            <div key={index} className="mb-2">
              <p className="border-b-2 border-[#CEABA5] pb-2">{agenda.date.split('-')[2]} <span className='ml-6'>{agenda.event}</span></p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Tidak ada agenda untuk tanggal ini.</p>
        )}
      </div>
    </div>
  );
};

export default CalendarAgenda;
