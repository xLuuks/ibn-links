import {
  Globe,
  Instagram,
  Facebook,
  Youtube,
  HandHeart,
  GraduationCap,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export default function IBNLandingPage() {
  const mainLinks = [
    {
      title: "Site Institucional",
      url: "https://ibnipb.org.br/",
      icon: Globe,
      featured: false,
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/institutobiblicodonorte/",
      icon: Instagram,
      featured: false,
    },
    {
      title: "Facebook",
      url: "https://www.facebook.com/ibnipb/",
      icon: Facebook,
      featured: false,
    },
    {
      title: "YouTube",
      url: "https://www.youtube.com/@InstitutoB%C3%ADblicoDoNorte",
      icon: Youtube,
      featured: false,
    },
    {
      title: "Mural de Oração",
      url: "https://muraldeoracao.netlify.app",
      icon: HandHeart,
      featured: true,
    },
    {
      title: "Sistema Acadêmico",
      url: "https://ibn-academico.web.app/",
      icon: GraduationCap,
      featured: true,
    },
  ];

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f7f2ea_0%,#f2ebe0_100%)] px-5 py-8 text-[#244334] md:px-8 md:py-10">
      <div className="mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-[32px] border border-[#e8ddcf] bg-white shadow-[0_20px_60px_rgba(36,67,52,0.10)]">
          <div className="relative bg-gradient-to-br from-[#2f5b44] via-[#456d56] to-[#cda36f] px-6 py-10 md:px-10 md:py-12">
            <div className="absolute -right-12 -top-10 h-36 w-36 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-[-1.5rem] left-0 h-28 w-28 rounded-full bg-[#f8c129]/25 blur-3xl" />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,rgba(248,193,41,0)_0%,rgba(248,193,41,0.14)_100%)]" />

            <div className="relative flex flex-col items-center gap-4 text-center">
              <img
                src="/img/logo_ibn.png"
                alt="Logo do Instituto Bíblico do Norte"
                className="h-24 w-24 object-contain md:h-28 md:w-28"
              />

              <div className="flex flex-col items-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-medium tracking-wide text-white backdrop-blur-sm md:text-xs">
                  <Sparkles className="h-3.5 w-3.5" />
                  Portal de Acessos
                </div>
                <h1 className="mt-2 text-2xl font-bold leading-tight text-white md:text-4xl">
                  Instituto Bíblico do Norte
                </h1>
                <p className="mt-2 max-w-3xl text-balance text-sm leading-7 text-white/90 md:text-[1.05rem] md:leading-8">
                  Formando vocacionados para o serviço cristão, com base bíblica sólida e compromisso com a missão.
                </p>
              </div>
            </div>
          </div>

          <div className="px-6 py-6 md:px-10 md:py-8">
            <div className="mb-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b58a4d]">
                Acesso rápido
              </p>
              <h2 className="mt-1 text-lg font-bold md:text-xl">Canais e plataformas</h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {mainLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.title}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`group flex items-center justify-between rounded-2xl border px-5 py-4 transition duration-200 hover:-translate-y-0.5 hover:shadow-md ${
                      item.featured
                        ? "border-[#d8c5a9] bg-[#f8f4ed] hover:border-[#c9ae85]"
                        : "border-[#ebe3d7] bg-[#fcfaf7] hover:border-[#d4c2a8]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                          item.featured ? "bg-[#315944] text-white" : "bg-[#eef4f0] text-[#315944]"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold md:text-base">{item.title}</span>
                        {item.featured && (
                          <p className="mt-0.5 text-xs text-[#7a6a55]">Acesso em destaque</p>
                        )}
                      </div>
                    </div>

                    <span className="rounded-xl bg-[#315944] px-3 py-2 text-sm text-white shadow-sm ring-1 ring-[#264735]/20 transition group-hover:bg-[#f8c129] group-hover:text-[#244334] group-hover:ring-[#f8c129]">
                      <ArrowUpRight className="h-4.5 w-4.5" />
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="mt-7 rounded-[26px] border border-[#ebe3d7] bg-[#fcfaf7] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b58a4d]">
                Contato
              </p>
              <h2 className="mt-1 text-lg font-bold md:text-xl">Fale com o IBN</h2>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <a
                  href="https://wa.me/5587988384034"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-[#e8ddcf] bg-white px-4 py-3 hover:shadow-sm"
                >
                  <div>
                    <p className="text-sm font-semibold">WhatsApp</p>
                    <p className="text-xs text-[#637067]">+55 87 98838-4034</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-[#315944]" />
                </a>

                <div className="flex items-center justify-between rounded-2xl border border-[#e8ddcf] bg-white px-4 py-3">
                  <div>
                    <p className="text-sm font-semibold">Email</p>
                    <p className="text-xs text-[#637067]">ibnipb@gmail.com</p>
                  </div>
                </div>

                <div className="md:col-span-2 rounded-2xl border border-[#e8ddcf] bg-white px-4 py-3">
                  <p className="text-sm font-semibold">Endereço</p>
                  <p className="mt-1 text-xs text-[#637067]">
                    Av. Célso Galvão, 600 - Heliópolis, Garanhuns - PE, 55296-120
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col items-center gap-2 border-t border-[#efe6da] pt-5 text-center text-sm text-[#637067]">
              <p>Instituto Bíblico do Norte • Referência na preparação de missionários desde 1945</p>
              <p className="text-xs text-[#8a978f]">Desenvolvido por Lucas Alves</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
