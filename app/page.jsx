    const herName = "دودو"

    const memories = [
      { title: "البداية", text: `الدنيا اتغيرت اليوم اللي قابلتك فيه يا ${herName}`, img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
      { title: "ضحكتك", text: `هي السبب اللي بيخليني اكمل يا ${herName}`, img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330" },
      { title: "معاكي", text: `كل مكان بقى بيت معاكي يا ${herName}`, img: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2" },
      { title: "بحبك", text: `بحبك يا ${herName} النهاردة وبكرة وكل يوم`, img: "https://images.unsplash.com/photo-1518199266791-5375a83190b7" }
    ]

    export default function Home() {
      return (
        <main style={{background: 'black', color: 'white', fontFamily: 'Arial'}}>
          <div style={{textAlign: 'center', padding: '30px', background: '#111'}}>
            <h1 style={{fontSize: '40px'}}>موقع مخصوص لـ {herName} ❤️</h1>
          </div>
          
          {memories.map((item, i) => (
            <section
              key={i}
              style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: `url(${item.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                textAlign: 'center'
              }}
            >
              <div style={{background: 'rgba(0,0,0,0.6)', padding: '40px', borderRadius: '20px', maxWidth: '80%'}}>
                <h1 style={{fontSize: '48px', fontWeight: 'bold', marginBottom: '20px'}}>{item.title}</h1>
                <p style={{fontSize: '24px'}}>{item.text}</p>
              </div>
            </section>
          ))}
        </main>
      )
    }
