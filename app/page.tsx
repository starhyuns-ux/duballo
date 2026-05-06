'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowUpRight, 
  ChevronRight, 
  Clock, 
  CheckCircle2,
  XCircle,
  Calendar,
  Target,
  FileText,
  ShieldCheck,
  Smartphone,
  ClipboardList,
  Monitor,
  ExternalLink,
  User,
  Plus,
  Save,
  Trash2
} from 'lucide-react'

const SectionLabel = ({ text, number }: { text: string, number: string }) => (
  <div className="flex items-center gap-4 md:gap-8 mb-12 md:mb-16">
    <span className="text-sm md:text-base font-black font-mono tracking-tighter opacity-40">{number}</span>
    <div className="h-[1px] md:h-[2px] flex-1 bg-black opacity-10"></div>
    <span className="text-xs md:text-sm font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-black/80">{text}</span>
  </div>
)

const Card = ({ title, children, number, className = "" }: { title: string, children: React.ReactNode, number?: string, className?: string }) => (
  <div className={`group relative border-t-2 md:border-t-4 border-black pt-8 md:pt-12 pb-12 md:pb-16 ${className}`}>
    <div className="flex justify-between items-start mb-6 md:mb-10">
      {number && <span className="text-xs md:text-sm font-bold font-mono tracking-tighter text-black/40">[{number}]</span>}
      <ArrowUpRight size={24} className="opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
    <h3 className="text-2xl md:text-3xl font-black uppercase mb-6 md:mb-8 tracking-tighter leading-none">
      {title}
    </h3>
    <div className="text-lg md:text-xl text-gray-800 leading-relaxed font-bold">
      {children}
    </div>
  </div>
)

const HighlightBox = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-[#33bbc5] p-8 md:p-20 text-white shadow-2xl">
    {children}
  </div>
)

export default function DuballoStandaloneManual() {
  const [viewDate, setViewDate] = React.useState(new Date())
  const [selectedDate, setSelectedDate] = React.useState(new Date())
  
  const [assignments, setAssignments] = React.useState<Record<string, string>>({
    '2026-05-01': '이지윤 실장',
    '2026-05-02': '박준영 매니저',
    '2026-05-03': '이지윤 실장'
  })
  const [logs, setLogs] = React.useState<Record<string, string>>({
    '2026-05-01': '오전 외래 환자 폭주로 인해 키오스크 대기 줄 발생. 안내 인력 추가 투입 검토 필요.',
    '2026-05-02': '실손24 연계 작업 안정화 확인. 서류 누락률 5% 이하로 감소.'
  })

  const [tempManager, setTempManager] = React.useState('')
  const [tempLog, setTempLog] = React.useState('')

  const formatDateKey = (date: Date) => {
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
  }

  React.useEffect(() => {
    const key = formatDateKey(selectedDate)
    setTempManager(assignments[key] || '')
    setTempLog(logs[key] || '')
  }, [selectedDate, assignments, logs])

  const handleSave = () => {
    const key = formatDateKey(selectedDate)
    setAssignments(prev => ({ ...prev, [key]: tempManager }))
    setLogs(prev => ({ ...prev, [key]: tempLog }))
  }

  const handleDelete = () => {
    const key = formatDateKey(selectedDate)
    const newAssignments = { ...assignments }
    const newLogs = { ...logs }
    delete newAssignments[key]
    delete newLogs[key]
    setAssignments(newAssignments)
    setLogs(newLogs)
    setTempManager('')
    setTempLog('')
  }

  const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate()
  const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay()

  const changeMonth = (offset: number) => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + offset, 1))
  }

  const isToday = (year: number, month: number, day: number) => {
    const today = new Date()
    return today.getFullYear() === year && today.getMonth() === month && today.getDate() === day
  }

  const isSelected = (year: number, month: number, day: number) => {
    return selectedDate.getFullYear() === year && selectedDate.getMonth() === month && selectedDate.getDate() === day
  }

  const [teamMembers, setTeamMembers] = React.useState([
    { id: 1, name: '이지윤 실장', role: 'Insurance Claims Specialist', title: 'Team Leader', phone: '010-1234-5678', image: '/team-1.png' },
    { id: 2, name: '박준영 매니저', role: 'Field Support & Training', title: 'Operation Manager', phone: '010-8765-4321', image: '/team-2.png' }
  ])

  const [isAddingMember, setIsAddingMember] = React.useState(false)
  const [newMember, setNewMember] = React.useState({ name: '', role: '', title: '', phone: '' })

  const handleAddMember = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newMember.name) return
    setTeamMembers(prev => [
      ...prev, 
      { id: Date.now(), ...newMember, image: '/team-1.png' } // Using placeholder image for new members
    ])
    setNewMember({ name: '', role: '', title: '', phone: '' })
    setIsAddingMember(false)
  }

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-[#33bbc5] selection:text-white pb-40 md:pb-80">
      {/* 00. HERO SECTION - RESPONSIVE OPTIMIZED */}
      <section className="relative pt-20 md:pt-32 pb-24 md:pb-48 px-6 lg:px-20 border-b-2 md:border-b-4 border-black">
        <div className="max-w-7xl mx-auto relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 md:gap-16 mb-16 md:mb-24"
          >
            <div className="w-full md:w-auto">
              <div className="text-xs md:text-base font-black uppercase tracking-[0.4em] md:tracking-[0.6em] mb-6 md:mb-8 text-[#33bbc5]">
                Internal Operational Manual
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[110px] font-black tracking-tighter leading-[0.9] md:leading-[0.85] uppercase break-words">
                Blindingly<br />
                Bright <span className="text-[#33bbc5]">(+)</span>
              </h1>
            </div>
            <div className="w-full md:w-auto md:text-right flex flex-col items-start md:items-end">
              <a 
                href="https://lifree1.com/app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#33bbc5] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-black uppercase tracking-widest text-xs md:text-sm hover:bg-black transition-all mb-6 md:mb-8 shadow-xl hover:-translate-y-1 w-full md:w-auto justify-center"
              >
                Launch Kiosk App <ExternalLink size={16} />
              </a>
              <span className="font-serif italic text-3xl md:text-4xl lg:text-6xl text-[#33bbc5] block mb-4 md:mb-6">
                hello duballo
              </span>
              <div className="text-[10px] md:text-sm font-mono font-bold uppercase tracking-widest opacity-40">
                New Collection / Spring 2026
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-start">
            <div className="lg:col-span-5 space-y-8 md:space-y-12">
              <div className="text-sm md:text-base font-black uppercase tracking-widest border-l-4 md:border-l-8 border-black pl-6 md:pl-8">
                두발로병원 인하우스<br />보험청구 창구 운영 매뉴얼
              </div>
              <p className="text-lg md:text-2xl text-gray-600 leading-relaxed font-black max-w-xl">
                본 매뉴얼은 압구정 두발로병원의 고품격 서비스를 정의하며, 
                보험금 청구 지원 프로세스의 표준을 제시합니다.
              </p>
            </div>
            <div className="lg:col-span-7">
               <div className="aspect-[16/9] md:aspect-[16/8] bg-gray-100 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#33bbc5]/20 to-transparent mix-blend-overlay"></div>
                  <div className="absolute bottom-6 md:bottom-12 right-6 md:right-12 text-right">
                    <div className="text-4xl md:text-7xl font-black text-black/10 tracking-tighter uppercase mb-1 md:mb-2">DUBALLO OPS</div>
                    <div className="text-[10px] md:text-sm font-mono font-bold">DUBALLO ADMINISTRATION</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05-B. OPERATIONAL CALENDAR & LOG */}
      <section className="mb-32 md:mb-64">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 pt-24">
          <SectionLabel number="05-B" text="Operations Management" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Info & Controls */}
            <div className="lg:col-span-3">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-8">
                Daily<br />Ops Log
              </h2>
              <p className="text-sm font-bold text-gray-500 mb-12">
                날짜를 선택하여 담당자를 지정하고 업무 내용을 기록하세요.
              </p>
              
              <div className="space-y-6">
                <div className="p-6 bg-gray-50 border-2 border-black">
                  <div className="text-[10px] font-black uppercase tracking-widest text-[#33bbc5] mb-2">Selected Date</div>
                  <div className="text-2xl font-black">{formatDateKey(selectedDate).replace(/-/g, '.')}</div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
                    <div className="w-3 h-3 bg-[#33bbc5]"></div> Assigned
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
                    <div className="w-3 h-3 border-2 border-black"></div> Selected
                  </div>
                </div>
              </div>
            </div>

            {/* Middle: Calendar */}
            <div className="lg:col-span-5">
              <div className="border-4 border-black p-6 md:p-8">
                <div className="grid grid-cols-7 gap-1 mb-8">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                    <div key={day} className="text-[10px] font-black uppercase text-center opacity-40 pb-4">{day}</div>
                  ))}
                  {/* Empty cells for starting day offset */}
                  {Array.from({ length: getFirstDayOfMonth(viewDate.getFullYear(), viewDate.getMonth()) }).map((_, i) => (
                    <div key={`empty-${i}`} className="aspect-square"></div>
                  ))}
                  {Array.from({ length: getDaysInMonth(viewDate.getFullYear(), viewDate.getMonth()) }).map((_, i) => {
                    const day = i + 1
                    const year = viewDate.getFullYear()
                    const month = viewDate.getMonth()
                    const active = isSelected(year, month, day)
                    const dateKey = `${year}-${(month + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`
                    const isAssigned = assignments[dateKey]
                    
                    const firstDay = getFirstDayOfMonth(year, month)
                    const dayOfWeek = (day + firstDay - 1) % 7
                    const isSunday = dayOfWeek === 0
                    const isSaturday = dayOfWeek === 6

                    return (
                      <button 
                        key={day} 
                        onClick={() => setSelectedDate(new Date(year, month, day))}
                        className={`
                          aspect-square border-2 transition-all relative group flex flex-col items-center justify-center
                          ${active ? 'border-black bg-black text-white z-10 scale-105 shadow-xl' : 'border-gray-100 hover:border-[#33bbc5]'}
                          ${isSunday ? 'text-red-500' : isSaturday ? 'text-blue-500' : ''}
                          ${active && (isSunday || isSaturday) ? 'text-white' : ''}
                          ${isToday(year, month, day) && !active ? 'ring-2 ring-[#33bbc5] ring-inset' : ''}
                        `}
                      >
                        <span className="text-sm md:text-base font-bold">{day}</span>
                        {isAssigned && !active && (
                          <div className="absolute bottom-1 w-1 h-1 bg-[#33bbc5] rounded-full"></div>
                        )}
                        {isAssigned && active && (
                          <div className="absolute bottom-1 w-1 h-1 bg-white rounded-full"></div>
                        )}
                      </button>
                    )
                  })}
                </div>
                <div className="flex justify-between items-center pt-6 border-t-2 border-black/5">
                   <div className="text-sm font-black uppercase tracking-widest">
                     {viewDate.toLocaleString('en-US', { month: 'long', year: 'numeric' })}
                   </div>
                   <div className="flex gap-2">
                      <button 
                        onClick={() => changeMonth(-1)}
                        className="w-8 h-8 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all"
                      >
                        <ChevronRight size={14} className="rotate-180" />
                      </button>
                      <button 
                        onClick={() => changeMonth(1)}
                        className="w-8 h-8 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all"
                      >
                        <ChevronRight size={14} />
                      </button>
                   </div>
                </div>
              </div>
            </div>

            {/* Right: Input Panel */}
            <div className="lg:col-span-4">
              <motion.div 
                key={formatDateKey(selectedDate)}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-black text-white p-8 h-full flex flex-col"
              >
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-[#33bbc5] mb-2">
                      {isToday(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()) ? 'Daily Assignment' : 'Operational Log'}
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-tight">
                      {isToday(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()) ? 'Set Personnel' : 'View Data'}
                    </h3>
                  </div>
                  <div className="p-2 bg-white/10 rounded-lg">
                    {isToday(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()) ? (
                      <User size={20} className="text-[#33bbc5]" />
                    ) : (
                      <FileText size={20} className="text-white/40" />
                    )}
                  </div>
                </div>

                <div className="space-y-6 flex-1">
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest opacity-40 block mb-3">담당자 성명</label>
                    <input 
                      type="text" 
                      value={tempManager}
                      onChange={(e) => setTempManager(e.target.value)}
                      disabled={!isToday(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate())}
                      placeholder={isToday(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()) ? "예: 이지윤 실장" : "기록된 담당자 없음"}
                      className={`w-full bg-white/5 border-b-2 p-3 font-bold outline-none transition-colors text-lg ${
                        isToday(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate())
                          ? 'border-white/20 focus:border-[#33bbc5]' 
                          : 'border-transparent text-white/40 cursor-not-allowed'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest opacity-40 block mb-3">주요 업무 및 특이사항</label>
                    <textarea 
                      value={tempLog}
                      onChange={(e) => setTempLog(e.target.value)}
                      disabled={!isToday(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate())}
                      placeholder={isToday(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()) ? "오늘의 업무 일지를 작성하세요..." : "기록된 업무 일지가 없습니다."}
                      rows={6}
                      className={`w-full bg-white/5 border-2 p-4 font-bold outline-none transition-colors text-sm leading-relaxed resize-none ${
                        isToday(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate())
                          ? 'border-white/10 focus:border-[#33bbc5]' 
                          : 'border-transparent text-white/40 cursor-not-allowed'
                      }`}
                    />
                  </div>

                  {!isToday(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()) && (
                    <div className="bg-white/5 p-4 border border-white/10 flex items-center gap-3">
                      <Clock size={16} className="text-[#33bbc5]" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/60">
                        당일 업무 담당자만 추가/수정이 가능합니다.
                      </span>
                    </div>
                  )}
                </div>

                {isToday(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()) && (
                  <div className="pt-8 flex gap-3">
                    <button 
                      onClick={handleSave}
                      className="flex-1 bg-[#33bbc5] text-white py-4 font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all"
                    >
                      <Save size={16} /> Save Entry
                    </button>
                    <button 
                      onClick={handleDelete}
                      className="w-14 bg-white/10 text-white flex items-center justify-center hover:bg-red-500 transition-all"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 08-B. OUR PERSONNEL */}
        <section className="mb-32 md:mb-64">
           <SectionLabel number="08-B" text="The Personnel" />
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {teamMembers.map(member => (
                <motion.div 
                  layout
                  key={member.id} 
                  className="group"
                >
                  <div className="aspect-[3/4] bg-gray-100 mb-8 overflow-hidden relative">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-[#33bbc5]/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <button 
                      onClick={() => setTeamMembers(prev => prev.filter(m => m.id !== member.id))}
                      className="absolute top-4 right-4 w-10 h-10 bg-black text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-red-500"
                    >
                      <XCircle size={20} />
                    </button>
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-[#33bbc5] mb-2">{member.title}</div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">{member.name}</h3>
                  <p className="text-sm font-bold text-gray-500 mb-6 uppercase">{member.role}</p>
                  <div className="h-[2px] w-12 bg-black mb-6"></div>
                  <div className="text-lg font-black tracking-tight">{member.phone}</div>
                </motion.div>
              ))}

              {isAddingMember ? (
                <motion.form 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  onSubmit={handleAddMember}
                  className="p-8 border-4 border-black flex flex-col gap-6"
                >
                  <div className="text-2xl font-black uppercase tracking-tight mb-4">New Personnel</div>
                  <div className="space-y-4">
                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest opacity-40 block mb-2">성명</label>
                      <input 
                        required
                        type="text" 
                        value={newMember.name}
                        onChange={e => setNewMember({...newMember, name: e.target.value})}
                        className="w-full border-b-2 border-black p-2 font-bold focus:border-[#33bbc5] outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest opacity-40 block mb-2">직책 (예: Team Leader)</label>
                      <input 
                        type="text" 
                        value={newMember.title}
                        onChange={e => setNewMember({...newMember, title: e.target.value})}
                        className="w-full border-b-2 border-black p-2 font-bold focus:border-[#33bbc5] outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest opacity-40 block mb-2">업무명 (예: Insurance Specialist)</label>
                      <input 
                        type="text" 
                        value={newMember.role}
                        onChange={e => setNewMember({...newMember, role: e.target.value})}
                        className="w-full border-b-2 border-black p-2 font-bold focus:border-[#33bbc5] outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest opacity-40 block mb-2">연락처</label>
                      <input 
                        type="text" 
                        value={newMember.phone}
                        onChange={e => setNewMember({...newMember, phone: e.target.value})}
                        className="w-full border-b-2 border-black p-2 font-bold focus:border-[#33bbc5] outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <button type="submit" className="flex-1 bg-black text-white py-3 font-black uppercase text-xs tracking-widest hover:bg-[#33bbc5] transition-all">Register</button>
                    <button type="button" onClick={() => setIsAddingMember(false)} className="px-4 border-2 border-black font-black uppercase text-xs hover:bg-gray-100 transition-all">Cancel</button>
                  </div>
                </motion.form>
              ) : (
                <div 
                  onClick={() => setIsAddingMember(true)}
                  className="flex flex-col justify-end p-8 border-4 border-black border-dashed opacity-30 hover:opacity-100 transition-opacity cursor-pointer group min-h-[400px]"
                >
                  <div className="text-5xl font-black mb-8 group-hover:scale-125 transition-transform">+</div>
                  <div className="text-sm font-black uppercase tracking-[0.3em]">Join the Team</div>
                  <p className="text-xs font-bold mt-4 uppercase">신규 담당자 등록하기</p>
                </div>
              )}
           </div>
        </section>

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 pt-24 md:pt-52">
        
        {/* 01. Hospital Summary & 02. Positioning */}
        <section className="mb-32 md:mb-64">
          <SectionLabel number="01-02" text="Foundation & Strategy" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-32">
            <div className="lg:col-span-5">
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-12 md:mb-20">
                Hospital<br />Character
              </h2>
              <div className="space-y-6 md:space-y-8">
                {[
                  { label: '병원 성격', val: '압구정 소재 병원급 정형외과' },
                  { label: '위치', val: '서울 강남구 압구정로30길 45' },
                  { label: '진료 시간', val: '평일 09-18시 / 토 09-13시' },
                  { label: '주요 진료', val: '족부·발목, 관절·척추, 소아정형' },
                  { label: '의료진', val: '전문의 9~10명 규모' },
                  { label: '실손청구', val: '실손24 연계 및 EMR 연동 필수' }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-baseline border-b-2 md:border-b-4 border-gray-100 pb-4 md:pb-6">
                    <span className="text-[10px] md:text-sm font-black uppercase text-gray-400 shrink-0">{item.label}</span>
                    <span className="text-base md:text-xl font-bold text-right ml-4">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7">
              <HighlightBox>
                <div className="text-[10px] md:text-sm font-mono mb-6 md:mb-10 uppercase tracking-widest opacity-80 border-b border-white/30 pb-4 inline-block">Positioning</div>
                <h3 className="text-3xl md:text-5xl font-black uppercase mb-6 md:mb-10 leading-tight">
                  "보험 판매가 아니라<br />보험금 청구 지원입니다"
                </h3>
                <p className="text-lg md:text-2xl leading-relaxed mb-10 md:text-16 font-black opacity-90">
                  권장 문구: “진료 후 보험금 청구에 필요한 서류와 절차를 안내드리는 창구입니다.”
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                   <div className="bg-white/10 p-6 md:p-8 rounded-xl border border-white/20">
                      <div className="text-[10px] font-black mb-3 md:mb-4 uppercase text-white/60 tracking-widest">Risk Management</div>
                      <p className="text-sm md:text-base font-black">특정 설계사 추천 또는 보험 가입 유도 금지</p>
                   </div>
                   <div className="bg-white/10 p-6 md:p-8 rounded-xl border border-white/20">
                      <div className="text-[10px] font-black mb-3 md:mb-4 uppercase text-white/60 tracking-widest">Compliance</div>
                      <p className="text-sm md:text-base font-black">보험 모집 자격 미보유 시 가입 권유 엄격 금지</p>
                   </div>
                </div>
              </HighlightBox>
            </div>
          </div>
        </section>

        {/* 03. Checklist & 04. Setup */}
        <section className="mb-32 md:mb-64">
          <SectionLabel number="03-04" text="Operational Setup" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 md:gap-24">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-10 md:mb-16 leading-none">Pre-Check<br />List</h2>
              <div className="space-y-6 md:space-y-10">
                {[
                  '일평균 환자수 & 수납 동선 확인',
                  '서류 발급 부서 및 비용 파악',
                  '키오스크 설치 위치 및 전원 확인',
                  '홍보물 비치 가능 위치'
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-6 md:gap-8 text-sm md:text-base font-black uppercase tracking-tight">
                    <CheckCircle2 size={20} className="text-[#33bbc5] shrink-0" />
                    {text}
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
               <Card title="Optimal Location" number="04-1">
                 원무과·수납창구 근처이되 상담 내용이 들리지 않는 곳. 
                 수납 직후 동선에 위치해야 효과가 높습니다.
               </Card>
               <Card title="Essential Tools" number="04-2">
                 키오스크(Kiosk) 기기, 노트북, 휴대용 스캐너, 
                 개인정보 동의서, 파쇄함, 가이드북.
               </Card>
               <Card title="Kiosk Maintenance" number="04-3">
                 키오스크 상시 전원 확인, 화면 터치 반응 체크, 
                 프린터 용지 잔량 확인 및 센서 청소.
               </Card>
               <Card title="System Access" number="04-4">
                 <a href="https://lifree1.com/app" target="_blank" rel="noopener noreferrer" className="text-[#33bbc5] underline flex items-center gap-2 hover:text-black">
                   lifree1.com/app <ExternalLink size={14} />
                 </a>
                 <p className="mt-4 text-gray-500 text-xs md:text-sm italic">키오스크 프로그램 자동 로그인 상태 확인 필수.</p>
               </Card>
            </div>
          </div>
        </section>

        {/* 05. Standard Process - RESPONSIVE REFINED */}
        <section className="mb-32 md:mb-72 bg-black text-white p-8 md:p-24 rounded-[30px] md:rounded-[40px] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 md:p-12 opacity-5">
            <Monitor size={200} className="md:size-[300px]" strokeWidth={1} />
          </div>
          
          <div className="relative z-10">
            <SectionLabel number="05" text="The Method" />
            <div className="mb-12 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-12">
              <div>
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6 md:mb-8">
                  6 Steps<br />Success Flow
                </h2>
                <p className="text-lg md:text-2xl text-[#33bbc5] font-black leading-relaxed italic max-w-2xl">
                  "키오스크 기반의 효율적인 보험 청구 프로세스"
                </p>
              </div>
              <a 
                href="https://lifree1.com/app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-black uppercase tracking-widest text-xs md:text-sm hover:bg-[#33bbc5] hover:text-white transition-all shadow-xl w-full md:w-auto text-center"
              >
                Open System <ExternalLink size={16} className="inline ml-2" />
              </a>
            </div>

            <div className="grid grid-cols-1 gap-3 md:gap-4">
              {[
                { 
                  n: '01', 
                  t: '첫 응대', 
                  d: '“보험 청구 예정이시면 서류 누락 없는지 확인 도와드릴까요?”',
                  icon: <Target className="text-[#33bbc5]" size={24} />
                },
                { 
                  n: '02', 
                  t: '청구 가능 확인', 
                  d: '질병/상해, 통원/입원 파악 후 키오스크 초기 화면 안내',
                  icon: <Clock className="text-[#33bbc5]" size={24} />
                },
                { 
                  n: '03', 
                  t: '개인정보 동의', 
                  d: '키오스크 내 전자동의서 수령 전 민감정보 사용 목적 고지',
                  icon: <ShieldCheck className="text-[#33bbc5]" size={24} />
                },
                { 
                  n: '04', 
                  t: '서류 체크', 
                  d: '스캔 전 수술확인서, 진단서 등 정형외과 필수 서류 최종 확인',
                  icon: <FileText className="text-[#33bbc5]" size={24} />
                },
                { 
                  n: '05', 
                  t: '키오스크 접수', 
                  d: '키오스크 스캐너를 이용한 서류 업로드 및 전송 완료 확인',
                  icon: <Monitor className="text-[#33bbc5]" size={24} />
                },
                { 
                  n: '06', 
                  t: '사후 관리', 
                  d: '접수증 전달 및 보완 요청 시 안내받으실 연락처 확인',
                  icon: <ClipboardList className="text-[#33bbc5]" size={24} />
                }
              ].map((step, i) => (
                <div key={i} className="group relative bg-white/5 hover:bg-white/10 p-6 md:p-8 transition-all border-l-2 md:border-l-4 border-[#33bbc5] flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
                  <div className="text-xl md:text-2xl font-black font-mono text-[#33bbc5] opacity-50 shrink-0">{step.n}</div>
                  <div className="p-3 bg-white/10 rounded-xl shrink-0">{step.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-black uppercase mb-1 md:mb-2 tracking-tight">{step.t}</h4>
                    <p className="text-base md:text-lg font-bold text-white/60 leading-relaxed">{step.d}</p>
                  </div>
                  <ChevronRight size={24} className="opacity-10 group-hover:opacity-100 transition-opacity hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 06. Document Guide */}
        <section className="mb-32 md:mb-64">
          <SectionLabel number="06" text="Document Guide" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {[
              { t: '단순 통원', b: '영수증, 세부내역서', e: '처방전(병명코드 필수)' },
              { t: 'MRI·초음파', b: '영수증, 세부내역서', e: '의사소견서, 영상판독지' },
              { t: '도수치료', b: '영수증, 세부내역서', e: '치료확인서, 의사소견서' },
              { t: '골절', b: '진단서, 영수증, 내역서', e: '초진차트, X-ray 판독지' },
              { t: '수술', b: '진단서, 수술확인서', e: '수술기록지, 입퇴원확인서' },
              { t: '입원', b: '입퇴원확인서, 영수증', e: '진단서, 수술확인서' }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-8 md:p-12 hover:bg-[#33bbc5] hover:text-white transition-all">
                <div className="text-[10px] md:text-sm font-black uppercase opacity-50 mb-4 md:mb-6">{item.t}</div>
                <div className="text-xl md:text-2xl font-black uppercase mb-3 md:mb-4 leading-tight">{item.b}</div>
                <div className="text-xs md:text-base font-bold opacity-60 uppercase">{item.e}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 07. Focus Points & 08. Scripts */}
        <section className="mb-32 md:mb-64 grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-32">
          <div className="lg:col-span-5">
            <SectionLabel number="07" text="Focus Points" />
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-12 md:mb-20">
              Specific<br />Targets
            </h2>
            <div className="space-y-8 md:space-y-10">
              {[
                { l: '발목 염좌', v: '상해통원, 깁스, 상해수술비' },
                { l: '골절 환자', v: '골절진단비, 상해수술, 후유장해' },
                { l: '소아골절', v: '어린이보험 골절, 상해입원일당' },
                { l: '무지외반증', v: '질병수술비, 실손, 입원일당' }
              ].map((point, i) => (
                <div key={i} className="group">
                  <div className="text-[10px] md:text-sm font-black uppercase text-[#33bbc5] mb-2 md:mb-3">{point.l}</div>
                  <div className="text-lg md:text-xl font-black uppercase tracking-tight">{point.v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 bg-black text-white p-8 md:p-20 lg:p-32 rounded-[30px] md:rounded-[40px]">
            <SectionLabel number="08" text="Scripts" />
            <div className="space-y-12 md:space-y-20">
              <div>
                <div className="text-[10px] md:text-sm font-mono text-white/40 mb-6 md:mb-10">#01 첫 안내</div>
                <p className="text-2xl md:text-4xl font-bold leading-snug">
                  “안녕하세요. 키오스크로 보험금을 간편하게 청구하실 수 있도록 도와드리고 있습니다.”
                </p>
              </div>
              <div>
                <div className="text-[10px] md:text-sm font-mono text-white/40 mb-6 md:mb-10">#02 상담 연계</div>
                <p className="text-xl md:text-2xl font-bold leading-snug text-[#33bbc5]">
                  “접수는 완료되었습니다. 상세한 보장 내역 분석은 추후 안내드리겠습니다.”
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 13. Field Notice */}
        <section className="mb-40 md:mb-80">
           <SectionLabel number="13" text="Field Asset" />
           <div className="max-w-4xl mx-auto border-[6px] md:border-[12px] border-black p-8 md:p-32 text-center shadow-2xl rounded-xl md:rounded-2xl">
              <h4 className="text-[10px] md:text-base font-black uppercase tracking-[0.3em] md:tracking-[0.6em] mb-12 md:mb-20">현장 안내문 예시</h4>
              <h2 className="text-4xl md:text-8xl font-black uppercase mb-12 md:mb-20 tracking-tighter">
                보험금 청구<br />키오스크 안내
              </h2>
              <p className="text-lg md:text-2xl font-bold mb-12 md:mb-20 text-gray-500">진료 후 키오스크로 간편하게 보험금을 청구하세요.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 text-left mb-12 md:mb-20">
                 <div className="space-y-6 md:space-y-8">
                    <div className="text-[10px] md:text-sm font-black uppercase text-[#33bbc5] tracking-widest">Kiosk Guide</div>
                    <ul className="text-sm md:text-base font-bold uppercase leading-relaxed space-y-3 md:space-y-4">
                      <li>• 준비한 서류 스캔</li>
                      <li>• 간단한 본인 인증</li>
                      <li>• 실시간 전송 완료</li>
                    </ul>
                 </div>
                 <div className="space-y-6 md:space-y-8">
                    <div className="text-[10px] md:text-sm font-black uppercase text-red-500 tracking-widest">Notice</div>
                    <ul className="text-sm md:text-base font-bold uppercase leading-relaxed space-y-3 md:space-y-4">
                      <li>• 24시간 간편 접수</li>
                      <li>• 보안 인증 기술 적용</li>
                      <li>• 병원 수납과는 별개</li>
                    </ul>
                 </div>
              </div>
              <div className="h-[2px] md:h-[4px] w-full bg-black/10 mb-8 md:mb-12"></div>
              <div className="text-[10px] md:text-sm font-black uppercase tracking-widest opacity-40">DU BALLO HOSPITAL KIOSK OPS</div>
           </div>
        </section>

        {/* Footer Editorial Info */}
        <footer className="pt-20 md:pt-40 border-t-2 md:border-t-4 border-black flex flex-col md:flex-row justify-between gap-16 md:gap-24 items-start md:items-end">
          <div className="max-w-lg">
            <div className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 md:mb-12">Duballo<br />Manual <span className="text-[#33bbc5]">(+)</span></div>
            <p className="text-xs md:text-sm text-gray-500 font-black uppercase leading-relaxed tracking-wider">
              본 매뉴얼은 2026년 두발로병원 키오스크 운영을 위해 제작되었습니다.
            </p>
          </div>
          <div className="flex gap-12 md:gap-32">
            <div>
              <div className="text-[10px] md:text-sm font-black uppercase mb-4 md:mb-8 opacity-30 tracking-widest">Department</div>
              <div className="text-xs md:text-base font-black uppercase underline decoration-4 md:decoration-8 underline-offset-[8px] md:underline-offset-[12px]">Administration</div>
            </div>
            <div>
              <div className="text-[10px] md:text-sm font-black uppercase mb-4 md:mb-8 opacity-30 tracking-widest">Published</div>
              <div className="text-xs md:text-base font-black uppercase">MAY 2026 / VOL.01</div>
            </div>
          </div>
        </footer>
      </div>

      {/* Decorative vertical label - Hidden on mobile */}
      <div className="fixed top-1/2 right-0 -translate-y-1/2 rotate-90 origin-right translate-x-full pr-24 pointer-events-none hidden lg:block">
        <span className="text-sm font-black uppercase tracking-[1em] text-black/10">DUBALLO KIOSK OPERATIONS MANUAL</span>
      </div>
    </div>
  )
}
