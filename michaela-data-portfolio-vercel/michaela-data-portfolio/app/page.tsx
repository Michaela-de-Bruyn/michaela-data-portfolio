import { ArrowUpRight, Github, Linkedin, Mail, Database, Cloud, Code2, BarChart3, Sparkles } from "lucide-react";

const projects = [
 {n:"01",title:"Urban Basket",tag:"DATA WAREHOUSE",desc:"An end-to-end e-commerce data warehouse project focused on ingestion, transformation, dimensional modelling and analytics-ready data.",tech:["SQL","Databricks","ETL / ELT","Star Schema"],accent:"pink"},
 {n:"02",title:"Hospital Patient Flow",tag:"DATA ANALYTICS",desc:"A healthcare analytics project exploring patient movement, waiting times and operational bottlenecks to support data-driven decisions.",tech:["SQL","Python","Analytics","Visualisation"],accent:"lav"},
 {n:"03",title:"PEP Cloud Data",tag:"CLOUD DATA",desc:"Data and reporting work involving SQL, GCP, Looker Studio and cloud migration, with a focus on improving access to reliable business data.",tech:["GCP","SQL","Looker Studio","Data Dictionary"],accent:"pink"},
 {n:"04",title:"Reporting Automation",tag:"BI & AUTOMATION",desc:"Automated recurring reporting workflows and replaced manual spreadsheet processes with structured reporting and Power BI dashboards.",tech:["Power BI","SQL","Automation","Reporting"],accent:"lav"}
];

const skills=["SQL","Python","Databricks","GCP","PostgreSQL","SQL Server","Power BI","Git / GitHub","ETL / ELT","Data Modelling","Data Validation","Cloud Data"];

export default function Home(){
 return <main>
  <nav className="sticky top-0 z-20 border-b border-[#e8e0e6]/80 bg-[#fbf8fa]/90 backdrop-blur-md">
   <div className="container flex h-16 items-center justify-between">
    <a href="#" className="serif text-xl font-semibold">M<span className="text-[#ad7c9b]">.</span></a>
    <div className="hidden gap-7 text-sm text-[#655e68] md:flex">
      <a href="#work" className="hover:text-[#ad7c9b]">Work</a><a href="#skills" className="hover:text-[#ad7c9b]">Skills</a><a href="#journey" className="hover:text-[#ad7c9b]">Journey</a><a href="#about" className="hover:text-[#ad7c9b]">About</a>
    </div>
    <a href="#contact" className="rounded-full bg-[#3b3540] px-4 py-2 text-xs font-medium text-white hover:bg-[#514858]">Let's connect ↗</a>
   </div>
  </nav>

  <section className="soft-grid relative overflow-hidden">
   <div className="absolute -right-24 -top-20 h-80 w-80 rounded-full bg-[#ead8e8] opacity-60 blur-3xl"/>
   <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#e0d9ef] opacity-50 blur-3xl"/>
   <div className="container relative grid min-h-[680px] items-center gap-12 py-24 md:grid-cols-[1.2fr_.8fr]">
    <div className="fade">
      <div className="mono mb-6 text-xs uppercase tracking-[.22em] text-[#9a718a]">DATA ENGINEER · DATA ANALYST</div>
      <h1 className="max-w-4xl text-6xl font-semibold leading-[.98] tracking-[-.055em] md:text-8xl">Building data systems <span className="serif font-medium italic text-[#9f7592]">with purpose.</span></h1>
      <p className="mt-8 max-w-xl text-lg leading-8 text-[#716a74]">I build reliable data pipelines, transform complex datasets, and turn data into systems that help people make better decisions.</p>
      <div className="mt-9 flex flex-wrap gap-3">
       <a href="#work" className="rounded-full bg-[#3b3540] px-6 py-3 text-sm font-semibold text-white">Explore my work <ArrowUpRight className="ml-1 inline h-4 w-4"/></a>
       <a href="#contact" className="rounded-full border border-[#d9ced8] bg-white/60 px-6 py-3 text-sm font-semibold">Get in touch</a>
      </div>
      <div className="mt-10 flex gap-5 text-[#827582]"><a aria-label="GitHub" href="https://github.com/" target="_blank"><Github/></a><a aria-label="LinkedIn" href="https://www.linkedin.com/" target="_blank"><Linkedin/></a><a aria-label="Email" href="mailto:hello@example.com"><Mail/></a></div>
    </div>
    <div className="relative hidden md:block">
      <div className="card mx-auto max-w-sm overflow-hidden p-7 shadow-sm">
       <div className="flex items-center justify-between"><span className="mono text-[10px] uppercase tracking-[.2em] text-[#9b8796]">Currently building</span><span className="h-2.5 w-2.5 rounded-full bg-[#b58aa4]"/></div>
       <div className="mt-10 rounded-2xl bg-gradient-to-br from-[#f5e1ea] to-[#e9e3f3] p-6">
        <Database className="h-9 w-9 text-[#8c6a82]"/>
        <div className="mt-12 font-semibold">Data Engineering</div>
        <div className="mt-2 text-sm leading-6 text-[#706873]">Pipelines · Modelling · Cloud · Analytics</div>
       </div>
       <div className="mt-5 grid grid-cols-2 gap-2">{["SQL","Python","Databricks","GCP"].map(x=><span className="pill text-center" key={x}>{x}</span>)}</div>
      </div>
    </div>
   </div>
  </section>

  <section id="work" className="container py-24">
   <div className="mb-12 flex items-end justify-between"><div><div className="mono text-xs tracking-[.2em] text-[#a07590]">01 — SELECTED WORK</div><h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Projects I’m proud of.</h2></div><Sparkles className="hidden h-7 w-7 text-[#b38aa5] md:block"/></div>
   <div className="grid gap-5 md:grid-cols-2">{projects.map(p=><article className="card group p-7" key={p.title}>
    <div className={"mb-7 h-40 rounded-2xl p-6 "+(p.accent==="pink"?"bg-[#f5e3eb]":"bg-[#e9e3f4]")}>
      <div className="flex justify-between"><span className="mono text-[10px] tracking-[.2em] text-[#806c7b]">{p.n} / {p.tag}</span><ArrowUpRight className="h-5 w-5 text-[#8e7184] transition group-hover:translate-x-1 group-hover:-translate-y-1"/></div>
      <div className="mt-14 serif text-3xl">{p.title}</div>
    </div>
    <p className="leading-7 text-[#716a74]">{p.desc}</p>
    <div className="mt-6 flex flex-wrap gap-2">{p.tech.map(t=><span className="pill" key={t}>{t}</span>)}</div>
   </article>)}</div>
  </section>

  <section id="skills" className="border-y border-[#e7dfe6] bg-[#f7f1f5]">
   <div className="container py-24"><div className="grid gap-12 md:grid-cols-[.7fr_1.3fr]">
    <div><div className="mono text-xs tracking-[.2em] text-[#a07590]">02 — TOOLKIT</div><h2 className="mt-3 text-4xl font-semibold">What I work with.</h2><p className="mt-5 leading-7 text-[#716a74]">A growing engineering toolkit built around strong SQL, data fundamentals and practical cloud experience.</p></div>
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">{skills.map((s,i)=><div className="card flex items-center gap-3 p-4" key={s}><span className="text-[#aa7d98]">{[<Database key="1"/>,<Code2 key="2"/>,<Cloud key="3"/>,<BarChart3 key="4"/>][i%4]}</span><span className="text-sm font-medium">{s}</span></div>)}</div>
   </div></div>
  </section>

  <section id="journey" className="container py-24">
   <div className="mono text-xs tracking-[.2em] text-[#a07590]">03 — JOURNEY</div><h2 className="mt-3 text-4xl font-semibold md:text-5xl">From insight to infrastructure.</h2>
   <div className="mt-12 border-l border-[#d9cbd5] pl-7">
    {[
      ["Data Analytics","SQL, reporting, business insights and stakeholder-facing analysis."],
      ["BI & Automation","Power BI, reporting automation and structured data processes."],
      ["Data Teams","Business analysis and Scrum Master experience working alongside data and technology teams."],
      ["Data Engineering","Building pipelines, data models, validation processes and cloud-based data solutions."]
    ].map((x,i)=><div className="relative mb-9 last:mb-0" key={x[0]}><span className="absolute -left-[36px] top-1 h-3 w-3 rounded-full border-2 border-[#fbf8fa] bg-[#aa7d98]"/><div className="mono text-[10px] tracking-[.18em] text-[#a07590]">0{i+1}</div><h3 className="mt-2 text-xl font-semibold">{x[0]}</h3><p className="mt-2 max-w-2xl leading-7 text-[#716a74]">{x[1]}</p></div>)}
   </div>
  </section>

  <section id="about" className="bg-[#eee8f4]">
   <div className="container grid gap-12 py-24 md:grid-cols-[.8fr_1.2fr] md:items-center">
    <div className="rounded-[28px] bg-gradient-to-br from-[#f2dce8] via-[#f8eef3] to-[#ddd5ec] p-10"><div className="serif text-6xl italic text-[#8f6e83]">M.</div><div className="mono mt-20 text-[10px] uppercase tracking-[.2em] text-[#766778]">Cape Town · South Africa</div></div>
    <div><div className="mono text-xs tracking-[.2em] text-[#a07590]">04 — ABOUT</div><h2 className="mt-3 text-4xl font-semibold">Curious about how data works.</h2><p className="mt-6 leading-8 text-[#665f6a]">I’m a data professional moving deeper into engineering — combining analytical thinking with hands-on work in SQL, cloud platforms, data modelling and pipeline development.</p><p className="mt-4 leading-8 text-[#665f6a]">I enjoy taking messy, disconnected data and turning it into something structured, reliable and genuinely useful.</p></div>
   </div>
  </section>

  <section id="contact" className="container py-28 text-center">
   <div className="mono text-xs tracking-[.2em] text-[#a07590]">05 — CONTACT</div><h2 className="serif mt-4 text-5xl md:text-7xl">Let’s build something<br/><span className="italic text-[#a47794]">meaningful.</span></h2>
   <p className="mx-auto mt-7 max-w-lg leading-7 text-[#716a74]">I’m open to Data Engineering and Data Analytics opportunities, interesting projects and conversations about data.</p>
   <a href="mailto:hello@example.com" className="mt-8 inline-flex rounded-full bg-[#3b3540] px-7 py-3 text-sm font-semibold text-white">Say hello <Mail className="ml-2 h-4 w-4"/></a>
  </section>

  <footer className="border-t border-[#e7dfe6] py-7"><div className="container flex flex-col justify-between gap-3 text-xs text-[#817883] md:flex-row"><span>© 2026 Michaela de Bruyn</span><span className="mono">DESIGNED + BUILT WITH DATA IN MIND</span></div></footer>
 </main>
}
