import Link from 'next/link';
import fs from 'fs';
import path from 'path';

export default function Home() {
  const clientesDir = path.join(process.cwd(), 'app', 'clientes');
  
  let clients: { id: string; name: string; href: string }[] = [];
  
  try {
    if (fs.existsSync(clientesDir)) {
      const items = fs.readdirSync(clientesDir, { withFileTypes: true });
      clients = items
        .filter(dirent => dirent.isDirectory() && !dirent.name.startsWith('.'))
        .map(dirent => {
          // Format folder name: "mama-demo" -> "Mama Demo"
          const formattedName = dirent.name
            .replace(/-/g, ' ')
            .replace(/\b\w/g, (char) => char.toUpperCase());
            
          return {
            id: dirent.name,
            name: formattedName,
            href: `/clientes/${dirent.name}`
          };
        });
    }
  } catch (error) {
    console.error("Erro ao ler o diretório de clientes:", error);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0a] text-white p-6 md:p-12 lg:p-24 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#cfb48f]/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#b87d4b]/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="z-10 w-full max-w-7xl flex flex-col gap-16">
        <header className="text-center md:text-left space-y-4 border-b border-white/10 pb-12">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-mono tracking-[0.3em] uppercase text-white/40 mb-4">
            <span>Portfólio</span>
            <span className="text-white/10">•</span>
            <span>Engenharia de Software</span>
            <span className="text-white/10">•</span>
            <span>Araucária, PR</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-serif italic font-light tracking-tight text-white/90">
            Gustavo Miguel{" "}
            <span className="text-[#cfb48f] block md:inline">Nicolodi</span>
          </h1>
          <p className="text-lg md:text-xl font-light text-white/50 max-w-2xl mt-4">
            Uma coletânea de interfaces e sites construídos do design ao deploy.
            Esta é a capa; cada cartão abaixo é um capítulo navegável.
          </p>
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-white/30 pt-2">
            {clients.length} projetos • Next.js • React • TypeScript • Tailwind CSS
          </p>
        </header>

        {clients.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, i) => {
              // Alternate a bit for visual variety
              const hoverColorClass = i % 2 === 0 ? "hover:border-[#cfb48f]/40 hover:shadow-[#cfb48f]/5" : "hover:border-[#b87d4b]/40 hover:shadow-[#b87d4b]/5";
              const textColorClass = i % 2 === 0 ? "group-hover:text-[#cfb48f]" : "group-hover:text-[#b87d4b]";
              const badgeClass = i % 2 === 0 
                ? "bg-white/5 text-[#cfb48f] border-[#cfb48f]/20" 
                : "bg-[#b87d4b]/10 text-[#b87d4b] border-[#b87d4b]/30";

              return (
                <Link 
                  key={client.id} 
                  href={client.href} 
                  className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:shadow-2xl ${hoverColorClass}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-transparent pointer-events-none z-0"></div>
                  
                  <div className="relative z-10 flex-col h-full flex gap-12">
                    <div className="space-y-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase border ${badgeClass}`}>
                        Projeto
                      </span>
                      <h2 className={`text-3xl font-serif text-white transition-colors ${textColorClass}`}>
                        {client.name}
                      </h2>
                      <h3 className="text-sm font-light text-white/40 font-mono tracking-wider">
                        {client.id}
                      </h3>
                    </div>
                    
                    <div className="mt-auto space-y-6">
                      <p className="text-sm font-light text-white/60 leading-relaxed">
                        Interface, conteúdo e tema próprios, exportados como site estático.
                      </p>
                      <div className={`inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-white uppercase transition-colors ${textColorClass}`}>
                        Acessar Demonstração <span className="group-hover:translate-x-2 transition-transform">→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 text-white/40 font-mono italic">
            Nenhum projeto encontrado em app/clientes...
          </div>
        )}
      </div>

      <footer className="w-full max-w-7xl mt-24 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-white/30 font-mono uppercase tracking-[0.2em]">
        <span>© {new Date().getFullYear()} Gustavo Miguel Nicolodi // Todos os direitos reservados</span>
        <span className="mt-4 md:mt-0 opacity-50">Construído em Next.js Static Export</span>
      </footer>
    </main>
  );
}
