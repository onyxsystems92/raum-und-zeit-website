const orientationContent={
  fit:{kicker:'Arbeitsweise',text:'Raum und Zeit betrachtet nicht nur den offensichtlichen Schmerzort. Bewegung, Funktion, Kompensationen, Atmung und Reaktion des Nervensystems helfen dabei, ein Gesamtbild zu entwickeln.',link:'#therapie',label:'Arbeitsweise ansehen'},
  time:{kicker:'Zeit als Qualität',text:'Termine dauern in der Regel 60 Minuten. Nicht als Luxus, sondern damit Befundung, Behandlung und Reaktion gemeinsam betrachtet und die Therapie im Termin angepasst werden können.',link:'#kontakt',label:'Praxis kennenlernen'},
  therapy:{kicker:'Therapie',text:'Die Behandlung orientiert sich nicht an einer Methodenliste, sondern an dem, was im individuellen Fall relevant ist. Die verschiedenen therapeutischen Werkzeuge werden in einen funktionellen Zusammenhang gestellt.',link:'#therapie',label:'Therapie ansehen'},
  team:{kicker:'Team',text:'Raum und Zeit arbeitet in einer kleinen Praxisstruktur. Dadurch entstehen persönliche Kontinuität, fachlicher Austausch und die Möglichkeit, Entwicklungen über mehrere Termine hinweg wirklich wahrzunehmen.',link:'#team',label:'Team kennenlernen'}
};

document.querySelectorAll('.orientation-item').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.orientation-item').forEach(item=>item.classList.remove('is-active'));
    btn.classList.add('is-active');
    const c=orientationContent[btn.dataset.key];
    const answer=document.querySelector('.orientation-answer');
    answer.animate([{opacity:.25,transform:'translateY(6px)'},{opacity:1,transform:'translateY(0)'}],{duration:260,easing:'cubic-bezier(.2,.75,.25,1)'});
    document.querySelector('[data-answer-kicker]').textContent=c.kicker;
    document.querySelector('[data-answer]').textContent=c.text;
    const link=document.querySelector('[data-answer-link]');
    link.href=c.link;
    link.firstChild.textContent=c.label+' ';
  });
});

const therapyContent={
  orthopaedie:{kicker:'Bewegung verstehen',copy:'Rücken, Nacken, Schulter oder Knie werden nicht isoliert betrachtet. Ziel ist, Belastung, Bewegung und mögliche Kompensationen in einen verständlichen Zusammenhang zu bringen.'},
  sport:{kicker:'Belastbarkeit entwickeln',copy:'Nach Verletzungen oder bei wiederkehrenden Beschwerden wird nicht nur die schmerzende Struktur betrachtet, sondern auch, wie Belastung aktuell verarbeitet und Bewegung organisiert wird.'},
  neuro:{kicker:'Funktion im Alltag',copy:'Neurologische Therapie richtet sich an vorhandenen Fähigkeiten, Bewegungsmöglichkeiten und konkreten Alltagsanforderungen aus. Der genaue Behandlungsrahmen wird individuell abgestimmt.'},
  cmd:{kicker:'Kiefer im Zusammenhang',copy:'Beschwerden rund um Kiefer und CMD werden nicht nur lokal betrachtet. Haltung, Spannung, Atmung und funktionelle Wechselwirkungen können dabei Teil des Gesamtbildes sein.'},
  becken:{kicker:'Beckenboden & Funktion',copy:'Beckenbodenbeschwerden werden in Verbindung mit Atmung, Spannung, Bewegung und Alltag betrachtet. Ziel ist eine verständliche und individuell passende funktionelle Begleitung.'}
};

document.querySelectorAll('.therapy-row').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.therapy-row').forEach(item=>item.classList.remove('is-active'));
    btn.classList.add('is-active');
    const c=therapyContent[btn.dataset.therapy];
    document.querySelector('[data-therapy-kicker]').textContent=c.kicker;
    document.querySelector('[data-therapy-copy]').textContent=c.copy;
  });
});

const news=[
  {date:'Demo · wird ersetzt',title:'Neuigkeiten aus der Praxis',text:'Dieser Bereich ist für kurze, manuell gepflegte Updates gedacht – ohne zusätzliches CMS.',color:'var(--ci-coral)'},
  {date:'Demo · wird ersetzt',title:'Team, Angebote, Entwicklungen',text:'Neue Teammitglieder, neue Schwerpunkte oder Praxisänderungen können hier kompakt sichtbar werden.',color:'var(--ci-sage)'},
  {date:'Demo · wird ersetzt',title:'Weniger Content. Mehr Relevanz.',text:'Nur Informationen, die für Patient:innen oder Bewerber:innen wirklich einen Unterschied machen.',color:'var(--ci-blue)'}
];

document.querySelector('[data-news]').innerHTML=news.map(item=>`<article class="news-card"><div class="news-date">${item.date}</div><h3>${item.title}</h3><p>${item.text}</p><span class="news-chip" style="background:${item.color}"></span></article>`).join('');

document.querySelector('[data-route]').addEventListener('click',event=>{
  event.preventDefault();
  window.open('https://www.google.com/maps/search/?api=1&query=D%C3%BCsseldorfer+Str.+101+D%C3%BCsseldorf','_blank','noopener,noreferrer');
});

const header=document.querySelector('[data-header]');
const onScroll=()=>header.style.borderBottomColor=window.scrollY>18?'rgba(22,24,23,.28)':'rgba(22,24,23,.18)';
window.addEventListener('scroll',onScroll,{passive:true});
onScroll();
