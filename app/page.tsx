'use client'
import { motion } from 'framer-motion'

const memories = [
  { title: "البداية", text: "اليوم اللي قابلتك فيه الدنيا اتغيرت", img: "https://picsum.photos/800/1200?1" },
  { title: "ضحكتك", text: "هي السبب اللي بيخليني أكمل", img: "https://picsum.photos/800/1200?2" },
  { title: "معاك", text: "كل مكان بقى بيت", img: "https://picsum.photos/800/1200?3" },
  { title: "بحبك", text: "النهاردة وبكرة وكل يوم", img: "https://picsum.photos/800/1200?4" },
]

export default function Home() {
  return (
    <main className="bg-black">
      {memories.map((item, i) => (
        <motion.section
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="h-screen w-full flex items-center justify-center bg-cover bg-center sticky top-0"
          style={{ backgroundImage: `url(${item.img})` }}
        >
          <motion.div 
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            className="bg-white/20 backdrop-blur-lg rounded-3xl p-10 text-center text-white max-w-md mx-4"
          >
            <h1 className="text-6xl font-bold mb-4">{item.title}</h1>
            <p className="text-2xl">{item.text}</p>
          </motion.div>
        </motion.section>
      ))}
    </main>
  )
}
